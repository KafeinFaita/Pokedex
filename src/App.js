import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pageUrl, setPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      setPageUrl(nextPage);
    }
  }

  const handlePrevPage = () => {
    if (!prevPage) {
      setPageUrl('#');
    } else {
      setIsLoading(true);
      setPageUrl(prevPage);
    }
  }

  const handleJumpPage = (e) => {
    const newUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${e.target.value * 20}&limit=20`;
    if (pageUrl !== newUrl) {
      setIsLoading(true);
      setPageUrl(newUrl);
    }
  }

  return (
    <div id="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Main pokeUrl={pokemonUrl} loading={isLoading} setLoading={setIsLoading} next={handleNextPage} prev={handlePrevPage} jump={handleJumpPage}/>}/>
          <Route path="/about" component={About}/>}/>
        </Switch>
        <Footer />  
      </Router>

    </div>
  )
}

export default App;