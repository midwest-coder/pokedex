import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { grey } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    button: {
        background: grey[900],
        color: grey[100],
        padding: 10
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
})

function DetailsPage(props) {
    const classes = useStyles()

  return (
        <Card className={classes.container}>
            <Card className={classes.detailsBox}>
                <Button className={classes.button} onClick={() => props.detailsActive(false)}>Back</Button>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <img src={props.pokemon.img} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* <h1>{props.pokemon.name}</h1> */}
                    </Grid>
                </Grid>
            </Card>
        </Card>
  );
}

export default DetailsPage
