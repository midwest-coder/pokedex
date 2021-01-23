import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { makeStyles } from '@material-ui/core/styles'
import { Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core'
import { grey, cyan, purple } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ListItem from './ListItem'
import { Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
    card: {
        background: 'black',
        color: grey[100],
        marginTop: 5,
        marginBottom: 5,
        padding: 15
    },
    filterBox: {
        background: 'black',
        color: grey[100],
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
    typeClear: {
        background: cyan[500],
        color: grey[100],
    },
    weaknessClear: {
        background: purple[500],
        color: grey[100],
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
    checkbox: {
        background: grey[100],
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
    ,{name: "Grass", checked: false},{name: "Electric", checked: false}
    ,{name: "Ice", checked: false},{name: "Fighting", checked: false}
    ,{name: "Poison", checked: false},{name: "Ground", checked: false}
    ,{name: "Flying", checked: false},{name: "Psychic", checked: false}
    ,{name: "Bug", checked: false},{name: "Rock", checked: false}
    ,{name: "Ghost", checked: false},{name: "Dragon", checked: false}])
    const [weaknesses, setWeaknesses] = useState([
        {name: "Normal", checked: false},{name: "Fire", checked: false}
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

    
  const handleTypesChange = (event) => {
      let temp = [...types]
      let item = temp.find(e => e.name === event.target.name)
      let index = temp.indexOf(item)
      temp[index].checked = event.target.checked
      setTypes(temp);
  };

  const handleWeaknessesChange = (event) => {
    let temp = [...weaknesses]
    let item = temp.find(e => e.name === event.target.name)
    let index = temp.indexOf(item)
    temp[index].checked = event.target.checked
    setWeaknesses(temp);
};

const clearTypes = () => {
    let temp = types.map((type) => {
        return {name: type.name, checked: false}
    })
    setTypes(temp)
}

const clearWeaknesses = () => {
    let temp = weaknesses.map((weakness) => {
        return {name: weakness.name, checked: false}
    })
    setWeaknesses(temp)
}

const checkFilters = (value) => {
    const pokeTypes = value.type
    const pokeWeaknesses = value.weaknesses
    let filterCheck = true
    types.map((type) => {
        if(type.checked && filterCheck) {
            filterCheck = pokeTypes.includes(type.name)
        }
        })
    weaknesses.map((weakness) => {
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
                <Accordion className={classes.filterBox}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.filterBox}/>}
                    aria-controls="filter-content"
                    id="filter-header"
                    >
                    <Typography>Additional Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing="1">
                            <Grid item xs={12} sm={6}>
                                <FormLabel className={classes.textField} component="legend">Types</FormLabel>
                                <FormGroup row>
                                {
                                    types.map((type, key) => {
                                        return <FormControlLabel
                                        control={<Checkbox 
                                            checked={types[key].checked}
                                            onChange={handleTypesChange}
                                            style={{ color: cyan[400] }}
                                            name={type.name} 
                                            />
                                        }
                                        label={type.name}
                                        />
                                    })
                                }
                                </FormGroup>
                                <Button className={classes.typeClear} onClick={clearTypes}>Clear</Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormLabel className={classes.textField} component="legend">Weaknesses</FormLabel>
                                <FormGroup row>
                                {
                                    weaknesses.map((weakness, key) => {
                                        return <FormControlLabel
                                        control={<Checkbox 
                                            checked={weaknesses[key].checked}
                                            onChange={handleWeaknessesChange}
                                            style={{ color: purple[400] }}
                                            name={weakness.name} 
                                            />
                                        }
                                        label={weakness.name}
                                        />
                                    })
                                }
                                </FormGroup>
                                <Button className={classes.weaknessClear} onClick={clearWeaknesses}>Clear</Button>
                            </Grid>
                        </Grid>
                        
                    </AccordionDetails>
                </Accordion>
                <Card className={classes.pokemonList}>
                    <div className={classes.hideScroll}>
                        <Card className={classes.list}>
                            <ul className={classes.ul}>
                                {pokemonList.filter((pokemon) => pokemon.name.toLowerCase().startsWith(searchResult.toLowerCase()))
                                .filter((pokemon) => checkFilters(pokemon))
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
