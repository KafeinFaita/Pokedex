import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PokemonList = ({ url, loading, setLoading }) => {

    const [pokeImage, setPokeImage] = useState('');
    const [pokeName, setPokeName] = useState('');
    const [pokeType, setPokeType] = useState([]);
    const [pokeData, setPokeData] = useState({});
    
   

    useEffect(() => {
        setLoading(true);
        setPokeImage('');

        fetch(url).then(res => res.json()).then(data => {
            setPokeData(data);
            setPokeImage(data.sprites.front_default);
            setPokeName(data.name);
            setPokeType(data.types.map(type => type.type.name));
            setLoading(false);
 
        })
    }, [url, setLoading])
    
    return (     
        <Link to={{
            pathname: `/${pokeName}`,
            state: {
                data: pokeData
            } 
        }}>
            <div className="pokemon">
                <div className="img-container">

                    {loading ? <p style={{fontWeight: 'bold'}}>LOADING</p> : pokeImage ? <img src={pokeImage} alt=""/> : <p style={{fontWeight: 'bold'}}>NO IMAGE AVAILABLE</p>}
                </div> 
                
                <div className="desc-container">
                    <p>{`Name: ${pokeName}`}</p>
                    <p>{`Type/s: ${pokeType}`}</p>   
                </div>
            </div>
        </Link>
         
    )
  
}


export default PokemonList;