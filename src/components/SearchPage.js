import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { makeStyles } from '@material-ui/core/styles'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ListItem from './ListItem'
import { Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
        background: 'linear-gradient(45deg, #d97c1e, #d99e1e, #ebd61e)'
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

    const search = (value) => {
        setSearchResult(value.toLowerCase())
    }
    
    const setFocused = (value) => {
        props.focusedPokemon(pokemonList.find((e) => e.num === value))
        props.detailsActive(true)
    }

  return (
        <Card className={classes.card}>
                    {/* <Grid container spacing="1">
                    <Grid item xs={12} sm={8}> */}
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
                    {/* </Grid>
                    <Grid item xs={12} sm={4}> */}
                            {/* <Typography variant="h4" align="center">Pokemon Finder</Typography>
                    </Grid> */}
                {/* </Grid> */}
                <Accordion className={classes.filterBox}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.filterBox}/>}
                    aria-controls="filter-content"
                    id="filter-header"
                    >
                    <Typography>Additional Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails><FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label="Secondary"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Primary"
                        />
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.checkedF}
                                onChange={handleChange}
                                name="checkedF"
                                indeterminate
                            />
                            }
                            label="Indeterminate"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                            label="Custom color"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                            label="Custom icon"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                name="checkedI"
                            />
                            }
                            label="Custom size"
                        />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
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
