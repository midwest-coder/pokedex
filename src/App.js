import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import DetailsPage from './components/DetailsPage'
import SearchPage from './components/SearchPage'
import { Typography } from '@material-ui/core'
import './App.css'

const useStyles = makeStyles((theme) => ({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757, #73200b)',
      padding: 5
  }
}))

function App() {
  const classes = useStyles()
  const [detailsPageActive, setDetailsPageActive] = useState(false)
  const [focusedPokemon, setFocusedPokemon] = useState({})

  let content
  detailsPageActive ? 
  content =  <DetailsPage pokemon={focusedPokemon} detailsActive={setDetailsPageActive} /> :
  content = <SearchPage focusedPokemon={setFocusedPokemon} detailsActive={setDetailsPageActive} />
  return (
    <Container className={classes.container} fixed>
      <Typography variant="h1" align="center">Pokedex</Typography>
      {content}
    </Container>
  );
}

export default App
