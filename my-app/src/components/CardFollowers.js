import React from 'react';
import "../App.css"

function CardFollowers(props){
   
    return (
            <div className="follower" key={props.followers.id} >
                <h2>{props.followers.login}</h2>
                <img src={props.followers.avatar_url} alt={props.followers.login}/>
            </div>    
    )
}

export default CardFollowers;