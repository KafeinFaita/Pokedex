import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import JumpPage from './components/JumpPage'
import Footer from './components/Footer'

const App = () => {

  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pageUrl, setPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  let pokeCount = 0;

  useEffect(() => {
    fetch(pageUrl).then(res => res.json()).then(data => {
      setPokemonUrl(data.results.map(poke => poke.url))
      setNextPage(data.next)
      setPrevPage(data.previous)
    })
  }, [pageUrl])

  const handleNextPage = () => {
    if (!nextPage) {
      setPageUrl('#');
    } else {
      setPageUrl(nextPage);
    }
  }

  const handlePrevPage = () => {
    if (!prevPage) {
      setPageUrl('#');
    } else {
      setPageUrl(prevPage);
    }
  }

  const handleJumpPage = (e) => {
    setPageUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${e.target.value * 20}&limit=20`)
  }

  return (
    <div id="main">
      <Navbar />
      <div id="main-body">
        {pokemonUrl.map((url, index) => <PokemonList url={url} key={index}/>)}
      </div>
      <Pagination next={handleNextPage} prev={handlePrevPage}/>   
      <JumpPage jump={handleJumpPage}/>
      <Footer />  

    </div>
  )
}

export default App;