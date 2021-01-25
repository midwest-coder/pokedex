import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ListItem from './ListItem'
import AdditionalFilters from './AdditionalFilters'

const useStyles = makeStyles({
    card: {
        background: 'black',
        color: grey[100],
        marginTop: 5,
        marginBottom: 5,
        padding: 15
    },
    searchBox: {
        background: '#cfd2d4'
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
    const classes = useStyles()
    const { pokemonList } = useContext(PokeContext)
    const [searchResult, setSearchResult] = useState('')
    const [types, setTypes] = useState([
        {name: "Normal", checked: false},{name: "Fire", checked: false}
        ,{name: "Water", checked: false},{name: "Dark", checked: false}
    ,{name: "Grass", checked: false},{name: "Electric", checked: false}
    ,{name: "Ice", checked: false},{name: "Fighting", checked: false}
    ,{name: "Poison", checked: false},{name: "Ground", checked: false}
    ,{name: "Flying", checked: false},{name: "Psychic", checked: false}
    ,{name: "Bug", checked: false},{name: "Rock", checked: false}
    ,{name: "Ghost", checked: false},{name: "Dragon", checked: false}])
    const [weaknesses, setWeaknesses] = useState([
        {name: "Normal", checked: false},{name: "Fire", checked: false}
        ,{name: "Water", checked: false},{name: "Dark", checked: false}
    ,{name: "Grass", checked: false},{name: "Electric", checked: false}
    ,{name: "Ice", checked: false},{name: "Fighting", checked: false}
    ,{name: "Poison", checked: false},{name: "Ground", checked: false}
    ,{name: "Flying", checked: false},{name: "Psychic", checked: false}
    ,{name: "Bug", checked: false},{name: "Rock", checked: false}
    ,{name: "Ghost", checked: false},{name: "Dragon", checked: false}])

    const search = (value) => {
        setSearchResult(value.toLowerCase())
    }
    
    const setFocused = (value) => {
        props.focusedPokemon(pokemonList.find((e) => e.num === value))
        props.detailsActive(true)
    }

const checkFilters = (value) => {
    const pokeTypes = value.type
    const pokeWeaknesses = value.weaknesses
    let filterCheck = true
    types.forEach((type) => {
        if(type.checked && filterCheck) {
            filterCheck = pokeTypes.includes(type.name)
        }
        })
    weaknesses.forEach((weakness) => {
        if(weakness.checked && filterCheck) {
            // console.log(`${type.name} - ${value.name} : ${pokeTypes.includes(type.name)}`)
            filterCheck = pokeWeaknesses.includes(weakness.name)
        }
        })
        console.log(filterCheck)
    return filterCheck
}

  return (
        <Card className={classes.card}>
                <Card className={classes.searchBox}>
                    <TextField 
                        id="user-lookup" 
                        label="Type in a Pokemon..."
                        placeholder="example: Bellsprout"
                        type="text"
                        onInput={(e) => search(e.target.value)}
                        autoComplete="off"
                        fullWidth
                        />
                </Card>
                <AdditionalFilters types={types} weaknesses={weaknesses} setTypes={setTypes} setWeaknesses={setWeaknesses} />
                <Card className={classes.pokemonList}>
                    <div className={classes.hideScroll}>
                        <Card className={classes.list}>
                            <ul className={classes.ul}>
                                {pokemonList.filter((pokemon) => (pokemon.name.toLowerCase().startsWith(searchResult.toLowerCase()) && checkFilters(pokemon)))
                                .map((pokemon) => <li className={classes.li}>
                                <Button className={classes.button} onClick={() => setFocused(pokemon.num)}>
                                    <ListItem pokemon={pokemon}/>
                                </Button>
                                </li>)
                                }
                            </ul>
                        </Card>
                    </div>
                </Card>
        </Card>
  );
}

export default SearchPage
