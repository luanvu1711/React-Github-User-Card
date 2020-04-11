import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardProfile from "./components/CardProfile";
import CardFollowers from "./components/CardFollowers";
import styled from 'styled-components';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      person: {},
      followers: []
    };
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/luanvu1711`)
    .then(res => res.json())
    .then(profile => {
      this.setState({ person: profile})
      fetch(`${profile.followers_url}`)
      .then(res => res.json())
      .then(follower => {
        
        return this.setState({followers: follower})})
      .catch(err => {
        console.log('Err2 :', err)
      })
    })
    .catch(err => {
      console.log('Err :', err)
    })
 
  }

 
  render(){

    
  return (
    <div>
      <CardProfile profile={this.state.person}/>
      <div className="followers">
      {this.state.followers.map(item => {
        return <CardFollowers followers={item}/>
      })}
      </div>
    </div>
    );
  }
}

export default App;
