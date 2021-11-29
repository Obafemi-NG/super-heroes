import React from 'react';
import './card.styles.css'

const Card = (props) => {
    return(
        <div className = 'card-container'>
            <img src = 'https://robohash.org/set=set4' alt = 'super-hero' />
            <h3 > {props.superHero.name} </h3>
            <p> {props.superHero.email}</p>
        </div>
    )
};

export default Card;