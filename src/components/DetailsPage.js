import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
        height: '100%',
        width: 'calc(100% + 18px)',
        overflow: 'auto',
        height: 286
    },
    list: {
        background: 'linear-gradient(45deg, #113C70, #3D0757)',
        height: '100%',
        width: 'calc(100% + 18px)',
        overflow: 'auto',
        height: 300
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

  return (
        <Card className={classes.card}>
            <Card className={classes.pokemonList}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle2">{(focusedUser === undefined) ? '' : focusedUser.username}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle2">{(focusedUser === undefined) ? '' : focusedUser.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle2">{(focusedUser === undefined) ? '' : focusedUser.balance}</Typography>
                    </Grid>
                </Grid>
                <Card className={classes.pokemonList}>
                    <div className={classes.hideScroll}>
                        <Card className={classes.gameList}>
                            <ul className={classes.ul}>
                                {(focusedUser == undefined) ? '' : (focusedUser.matches == undefined) ? '' : 
                                    focusedUser.matches.reverse().map((matchID) => {
                                        return <li className={classes.li}>
                                    <Button className={classes.button}>
                                        <ListItem match={props.matches.find((e) => e._id === matchID)}/>
                                    </Button>
                                    </li>})
                                }
                            </ul>
                        </Card>
                    </div>
                </Card>
            </Card>
        </Card>
  );
}

export default App
