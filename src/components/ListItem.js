import React from 'react'
import { Typography, Grid } from '@material-ui/core'


function ListItem(props) {
    const pokemon = props.pokemon

    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <img src={pokemon.img} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography align="left">#{pokemon.num} {pokemon.name}</Typography>
            </Grid>
                <Grid item xs={12} sm={4}>
                <Typography align="left">Type: {pokemon.type.join(", ")}</Typography>
                <Typography align="left">Weaknesses: {pokemon.weaknesses.join(", ")}</Typography>
            </Grid>
        </Grid>
    );
}

export default ListItem;
