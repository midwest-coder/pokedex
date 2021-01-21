import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ListItem from './ListItem'

const useStyles = makeStyles({
    card: {
        background: 'black',
        color: grey[100],
        marginTop: 5,
        marginBottom: 5,
        padding: 15
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
    purpleButton: {
        background: 'linear-gradient(45deg, #113C70, #3D0757)',
        color: grey[100],
    },
    pokemonList: {
        background: grey[900],
        color: grey[100],
        marginTop: 5,
        marginBottom: 5,
        padding: 15,
    },
    gameList: {
        background: 'linear-gradient(45deg, #32a883, #3290a8)',
        height: 500,
        width: 'calc(100% + 18px)',
        overflow: 'auto'
    },
    list: {
        background: 'linear-gradient(45deg, #113C70, #3D0757)',
        height: 500,
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
    const classes = useStyles()
    const [searchResult, setSearchResult] = useState('')
    const [focusedPokemon, setFocusedPokemon] = useState({})

    const search = (value) => {
        setFocusedPokemon(props.pokemon.find((e) => e.username === value.toLowerCase()))
        setSearchResult(value.toLowerCase())
    }

  return (
        <Card className={classes.card}>
                <TextField 
                    id="user-lookup" 
                    label="Username"
                    placeholder="Type in user"
                    type="text"
                    onInput={(e) => search(e.target.value)}
                    autoComplete="off"
                    InputProps={{
                        className: classes.textField
                    }}
                    fullWidth
                    />
                    <Card className={classes.pokemonList}>
                        <div className={classes.hideScroll}>
                            <Card className={classes.list}>
                                <ul className={classes.ul}>
                                    {props.pokemonList.filter((pokemon) => pokemon.name.startsWith(searchResult.toLowerCase()))
                                    .map((pokemon) => <li className={classes.li}>
                                        <Button className={classes.button}>
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
