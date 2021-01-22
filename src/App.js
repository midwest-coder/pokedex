import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import DetailsPage from './components/DetailsPage'
import SearchPage from './components/SearchPage'
import './App.css'
import logo from './images/logo.png'

const useStyles = makeStyles((theme) => ({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757, #73200b)',
      padding: 5,
  },
  logoBg: {
    display: 'flex',
    justifyContent: 'center',
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
      <Container className={classes.logoBg}>
        <img src={logo} />
      </Container>
      {content}
    </Container>
  );
}

export default App
