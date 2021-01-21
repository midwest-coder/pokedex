import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ListItem from './ListItem'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    card: {
        background: 'black',
        color: grey[100],
        marginTop: 5,
        marginBottom: 5,
        padding: 15
    },
    searchBox: {
        background: 'linear-gradient(45deg, #28286b, #204666, #3f195e)'
    },
    searchBoxLabel: {
        background: 'linear-gradient(45deg, #065ebd, #0763b3)',
        color:  grey[100]
    },
    hideScroll: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
    button: {
        width: '100%',
        background: 'black',
        color: grey[100],
        padding: 10
    },
    pokemonList: {
        background: grey[900],
        color: grey[100],
        marginBottom: 5,
        padding: 15,
    },
    list: {
        background: 'linear-gradient(45deg, #32a89e, #113C70)',
        height: 400,
        width: 'calc(100% + 18px)',
        overflow: 'auto'
    },
    textField: {
        color: grey[100],
    },
    ul: {
        listStyle: 'none',
        paddingLeft: 4,
        paddingRight: 4
    },
    li: {
        marginBottom: 4,
        marginTop: 4
    }
})

function SearchPage(props) {
    const { pokemonList } = useContext(PokeContext)
    const classes = useStyles()
    const [searchResult, setSearchResult] = useState('')
    const [focusedPokemon, setFocusedPokemon] = useState(null)

    const search = (value) => {
        setSearchResult(value.toLowerCase())
    }
    
    const setFocused = (value) => {
        setFocusedPokemon(pokemonList.find((e) => e.num === value))
        props.detailsActive(true)
    }

  return (
        <Card className={classes.card}>
                                <Grid container spacing="1">
                    <Grid item xs={12} sm={8}>
                        <Card className={classes.searchBox}>
                            <TextField 
                                id="user-lookup" 
                                label="Pokemon Search"
                                placeholder="Type Pokemon"
                                type="text"
                                onInput={(e) => search(e.target.value)}
                                autoComplete="off"
                                InputProps={{
                                    className: classes.textField
                                }}
                                fullWidth
                                />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                            <Typography variant="h4" align="center">Pokemon Finder</Typography>
                    </Grid>
                </Grid>
                <Card className={classes.pokemonList}>
                    <div className={classes.hideScroll}>
                        <Card className={classes.list}>
                            <ul className={classes.ul}>
                                {pokemonList.filter((pokemon) => pokemon.name.toLowerCase().startsWith(searchResult.toLowerCase()))
                                .map((pokemon) => <li className={classes.li}>
                                    <Button className={classes.button} onClick={() => setFocused(pokemon.num)}>
                                        <ListItem pokemon={pokemon}/>
                                    </Button>
                                    </li>)}
                            </ul>
                        </Card>
                    </div>
                </Card>
        </Card>
  );
}

export default SearchPage
