import React, { useState, useEffect } from 'react';

const PokemonList = ({ url, loading, setLoading}) => {

    const [pokeImage, setPokeImage] = useState('');
    const [pokeName, setPokeName] = useState('');
    const [pokeType, setPokeType] = useState([]);

    useEffect(() => {
        setLoading(true);

        fetch(url).then(res => res.json()).then(data => {
            setPokeImage(data.sprites.front_default);
            setPokeName(data.name);
            setPokeType(data.types.map(type => type.type.name));
            setLoading(false);
        })
    }, [url, setLoading])
    
    return (       
        <div className="pokemon">
            <div className="img-container">

                {loading ? <p style={{fontWeight: 'bold'}}>LOADING</p> : pokeImage ? <img src={pokeImage} alt=""/> : <p style={{fontWeight: 'bold'}}>NO IMAGE AVAILABLE</p>}
            </div> 
            
            <div className="desc-container">
                <p>{`Name: ${pokeName}`}</p>
                <p>{`Type/s: ${pokeType}`}</p>   
            </div>
            
        </div>
    )
  
}


export default PokemonList;