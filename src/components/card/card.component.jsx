import React from 'react';
import './card.styles.css'

const Card = (props) => {
    return(
        <div className = 'card-container'>
            <h3 > {props.superHero.name} </h3>
        </div>
    )
};

export default Card;