import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import SearchPage from './components/SearchPage'
import './App.css'

const useStyles = makeStyles((theme) => ({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757, #73200b)',
      height: 800
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Container className={classes.container} fixed>
      <SearchPage />
    </Container>
  );
}

export default App
