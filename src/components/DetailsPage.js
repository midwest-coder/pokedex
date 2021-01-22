import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { grey } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
    }
})

function DetailsPage(props) {
    const classes = useStyles()

    let evolutionContent
    props.pokemon.prev_evolution != null || props.pokemon.next_evolution != null ?
    evolutionContent = <Grid container spacing="1">
                            <Grid item>
                                <Card className={classes.evolutionBg}>
                                    <Typography align="right" variant="sub1">Evolutions</Typography>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.evolutionBg}>

                                    </Card>
                            </Grid>
                        </Grid> :
    evolutionContent = ''

  return (
        <Card className={classes.container}>
            <Card className={classes.detailsBox}>
                <Button className={classes.button} onClick={() => props.detailsActive(false)}>Back</Button>
                <Grid container justify="center" spacing="5">
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.detailsBg}>
                            <Card className={classes.imgBg}>
                                <img src={props.pokemon.img} />
                            </Card>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.detailsBg}>
                            <Grid container justify="center">
                                <Typography variant="h5">{props.pokemon.name}</Typography>
                                <Typography variant="sub1">#{props.pokemon.num}</Typography>
                                <Grid container spacing="2">
                                    <Grid item>
                                    <Typography align="right" variant="h6">Type:</Typography>
                                    <Typography align="right" variant="h6">Weaknesses:</Typography>
                                    <Typography align="right" variant="h6">Height:</Typography>
                                    <Typography align="right" variant="h6">Weight:</Typography>
                                    </Grid>
                                    <Grid item>
                                    <Typography align="left" variant="h6">{props.pokemon.type.join(", ")}</Typography>
                                    <Typography align="left" variant="h6">{props.pokemon.weaknesses.join(", ")}</Typography>
                                    <Typography align="left" variant="h6">{props.pokemon.height}</Typography>
                                    <Typography align="left" variant="h6">{props.pokemon.weight}</Typography>
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
