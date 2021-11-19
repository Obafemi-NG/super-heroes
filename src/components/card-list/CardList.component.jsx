import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component'

const CardList = (props) => {
    return(
        <div className = 'card-list'>
            {props.superHeroes.map((superHero) => <Card key = {superHero.id} superHero = {superHero} />)}
        </div>
        
    )
}
export default CardList;