import React from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import JumpPage from './JumpPage'

const Main = (props) => {

  return (
    <div>
      <div id="main-body">
        {props.pokeUrl.map((url, index) => 
          <PokemonList url={url} key={index} loading={props.loading} setLoading={props.setLoading} setPokeData={props.setPokeData}/>  
        )}
      </div>
      <Pagination next={props.next} prev={props.prev}/>
      <JumpPage jump={props.jump}/>
    </div>
     
  )

}

export default Main;