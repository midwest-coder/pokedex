import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import SearchPage from './components/SearchPage'
import './App.css'

const useStyles = makeStyles((theme) => ({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757)',
      height: 800
  }
}))

function App() {
  const classes = useStyles()
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
     fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then((res) => {
        return res.json().then((data) => data)
        }).then((data) => {
          const { pokemon } = data
          setPokemonList(pokemon)
        })
  }, [])
  

  let content
  pokemonList == null ?
  content = '' : 
  content = <SearchPage pokemonList={pokemonList} />
  

  return (
    <Container className={classes.container} fixed>
      {content}
    </Container>
  );
}

export default App
