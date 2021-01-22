import React, { useContext, useState } from 'react'
import { PokeContext } from '../context/PokeContext'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { grey } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles({
    button: {
        background: grey[900],
        color: grey[100],
        padding: 10,
        marginBottom: 20
    },
    container: {
        background: 'black',
        padding: "50px 150px"
    },
    detailsBox: {
        background: 'linear-gradient(45deg, #28286b, #204666, #3f195e)',
        padding: 15,
        height: 400
    },
    detailsBg: {
        background: 'black',
        color: grey[100],
        display: 'flex',
        justifyContent: 'center',
        padding: 40
    },
    detailsBg: {
        background: 'black',
        color: grey[100],
        display: 'flex',
        justifyContent: 'center',
        padding: 40,
        marginBottom: 5,
        '& h6':{
            fontSize: 17
        }
    },
    evolutionBgLabel: {
        background: 'black',
        color: grey[100],
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 5,
        marginTop: 6,
        '& h6':{
            fontSize: 17
        }
    },
    evolutionBg: {
        background: 'black',
        color: grey[100],
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 5,
        '& h6':{
            fontSize: 17
        }
    },
    imgBg: {
        background: 'linear-gradient(45deg, #00ab86, #009aab, #0072ab)',
        display: 'flex',
        justifyContent: 'center',
        padding: 40
    },
    prevEvImgBg: {
        background: 'linear-gradient(45deg, #d4950d, #e0e00b, #d9911e)',
        display: 'flex',
        justifyContent: 'center',
        padding: 5
    },
    nextEvImgBg: {
        background: 'linear-gradient(45deg, #bf0000, #b0355a, #460080)',
        display: 'flex',
        justifyContent: 'center',
        padding: 5
    },
    evImg: {
        height: 50
    }
})

function DetailsPage(props) {
    const classes = useStyles()
    const { pokemonList } = useContext(PokeContext)
    const [focusedPokemon, setFocusedPokemon] = useState(props.pokemon)


    let evolutionContent
    focusedPokemon.prev_evolution != null || focusedPokemon.next_evolution != null ?
    evolutionContent = <Grid container>
                            <Grid item>
                                <Card className={classes.evolutionBgLabel}>
                                    <Typography align="right" variant="sub1">Evolutions</Typography>
                                </Card>
                            </Grid>
                                {
                                    focusedPokemon.prev_evolution != null ?
                                    focusedPokemon.prev_evolution.map((item) => {
                                            const pokemon = pokemonList.find((pokemon)=> pokemon.num === item.num)
                                            return  <Grid item>
                                                        <Button onClick={() => {setFocusedPokemon(pokemonList.find((focused)=> focused.num === pokemon.num))}}>
                                                            <Card className={classes.evolutionBg}>
                                                                <Grid container>
                                                                <Card className={classes.prevEvImgBg}>
                                                                    <img src={pokemon.img} className={classes.evImg} />
                                                                </Card>
                                                                </Grid>
                                                            </Card>
                                                        </Button>
                                                    </Grid>
                                        })
                                    :
                                    ''
                                }
                                {
                                    focusedPokemon.next_evolution != null ?
                                    focusedPokemon.next_evolution.map((item) => {
                                            const pokemon = pokemonList.find((pokemon)=> pokemon.num === item.num)
                                            return <Grid item>
                                                        <Button onClick={() => {setFocusedPokemon(pokemonList.find((focused)=> focused.num === pokemon.num))}}>
                                                            <Card className={classes.evolutionBg}>
                                                                <Grid container>
                                                                <Card className={classes.nextEvImgBg}>
                                                                    <img src={pokemon.img} className={classes.evImg} />
                                                                </Card>
                                                                </Grid>
                                                            </Card>
                                                        </Button>
                                                    </Grid>
                                        })
                                    :
                                    ''
                                }
                        </Grid> :
    evolutionContent = ''

  return (
        <Card className={classes.container}>
            <Card className={classes.detailsBox}>
                <Button className={classes.button} onClick={() => props.detailsActive(false)}><ArrowBackIosIcon /> Back</Button>
                <Grid container justify="center" spacing="5">
                    <Grid item sm={12} md={4}>
                        <Card className={classes.detailsBg}>
                            <Card className={classes.imgBg}>
                                <img src={focusedPokemon.img} />
                            </Card>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card className={classes.detailsBg}>
                            <Grid container justify="center">
                                <Typography variant="h5">{focusedPokemon.name}</Typography>
                                <Typography variant="sub1">#{focusedPokemon.num}</Typography>
                                <Grid container spacing="2">
                                    <Grid item>
                                    <Typography align="right" variant="h6">Type:</Typography>
                                    <Typography align="right" variant="h6">Weaknesses:</Typography>
                                    <Typography align="right" variant="h6">Height:</Typography>
                                    <Typography align="right" variant="h6">Weight:</Typography>
                                    </Grid>
                                    <Grid item>
                                    <Typography align="left" variant="h6">{focusedPokemon.type.join(", ")}</Typography>
                                    <Typography align="left" variant="h6">{focusedPokemon.weaknesses.join(", ")}</Typography>
                                    <Typography align="left" variant="h6">{focusedPokemon.height}</Typography>
                                    <Typography align="left" variant="h6">{focusedPokemon.weight}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                        {evolutionContent}
                    </Grid>
                </Grid>
            </Card>
        </Card>
  );
}

export default DetailsPage
