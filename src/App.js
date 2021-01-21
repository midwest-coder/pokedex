import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import DetailsPage from './components/DetailsPage'
import SearchPage from './components/SearchPage'
import './App.css'

const useStyles = makeStyles((theme) => ({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757, #73200b)',
      padding: 15
  }
}))

function App() {
  const classes = useStyles()
  const [detailsPageActive, setDetailsPageActive] = useState(false)

  let content
  detailsPageActive ? 
  content =  <DetailsPage detailsActive={setDetailsPageActive} /> :
  content = <SearchPage detailsActive={setDetailsPageActive} />
  return (
    <Container className={classes.container} fixed>
      {content}
    </Container>
  );
}

export default App
