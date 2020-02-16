import React from 'react';
import { useLocation } from 'react-router-dom';

const PokemonCard = (props) => {

    const location = useLocation(); 
    const info = location.state.data;


    return (
    <div>
        <img src={info.sprites.front_default} alt={info.name} />
        <p>Name: {info.name}</p>
        <p>Type/s: {info.types.map(type => type.type.name).join(', ')}</p>
        <p>Ability: {info.abilities.map(ability => ability.is_hidden === true ? `${ability.ability.name} (hidden ability)` : ability.ability.name).join(', ')}</p>
        <p>Height: {info.height}</p>
        <p>Weight: {info.weight}</p>
    </div>
    )
}

export default PokemonCard;