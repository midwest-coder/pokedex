import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { grey, cyan, purple } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
      background: 'linear-gradient(45deg, #113C70, #3D0757, #73200b)',
      padding: 5
  },
  filterBox: {
      background: 'black',
      color: grey[100],
  },
  typeClear: {
      background: cyan[500],
      color: grey[100],
  },
  weaknessClear: {
      background: purple[500],
      color: grey[100],
  },
  textField: {
      color: grey[100],
  },
})

function AdditionalFilters(props) {
  const classes = useStyles()

  const handleTypesChange = (event) => {
    let temp = [...props.types]
    let item = temp.find(e => e.name === event.target.name)
    let index = temp.indexOf(item)
    temp[index].checked = event.target.checked
    props.setTypes(temp);
};

const handleWeaknessesChange = (event) => {
  let temp = [...props.weaknesses]
  let item = temp.find(e => e.name === event.target.name)
  let index = temp.indexOf(item)
  temp[index].checked = event.target.checked
  props.setWeaknesses(temp);
};

const clearTypes = () => {
  let temp = props.types.map((type) => {
      return {name: type.name, checked: false}
  })
  props.setTypes(temp)
}

const clearWeaknesses = () => {
  let temp = props.weaknesses.map((weakness) => {
      return {name: weakness.name, checked: false}
  })
  props.setWeaknesses(temp)
}

  return (
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
                    props.types.map((type, key) => {
                        return <FormControlLabel
                        control={<Checkbox 
                            checked={props.types[key].checked}
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
                    props.weaknesses.map((weakness, key) => {
                        return <FormControlLabel
                        control={<Checkbox 
                            checked={props.weaknesses[key].checked}
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
  );
}

export default AdditionalFilters
