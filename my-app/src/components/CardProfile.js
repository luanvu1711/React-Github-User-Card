import React from 'react';

function CardProfile(props) {
    return (
        <div className="profile">
            <h1>{props.profile.name}</h1>
            <img src={props.profile.avatar_url} alt={props.profile.name}/>
        </div>
    )
}

export default CardProfile;
