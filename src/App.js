import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import DetailsPage from './components/DetailsPage'
import SearchPage from './components/SearchPage'
import { Typography } from '@material-ui/core'
import './App.css'

const useStyles = makeStyles({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757, #73200b)',
      padding: 5,
      // '& h1': {
      //   color: 'white'
      // }
  },
  logo: {
    color: '#ad1538',
    textShadow: '2px 2px black'
  }
})

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
      <Typography variant="h1" align="center" className={classes.logo}>Pokedex</Typography>
      {content}
    </Container>
  );
}

export default App
