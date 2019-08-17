import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1)
  },
}));

const Form = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} container direction="row">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-filled">PO Number</InputLabel>
            <Input
              id='poNumber'
              value={props.poNumber}
              className={classes.input}
              onChange={props.handleInputChange}
              inputProps={{
                'aria-label': 'description',
              }}
            />
          </FormControl>
          <Grid item xs={12} container direction="row">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-filled">Street Address</InputLabel>
              <Input
                id='street'
                onChange={props.handleInputChange}
                value={props.street}
                className={classes.input}
                inputProps={{
                  'aria-label': 'description',
                }}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-filled">City</InputLabel>
              <Input
                id='city'
                onChange={props.handleInputChange}
                value={props.city}
                className={classes.input}
                inputProps={{
                  'aria-label': 'description',
                }}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-filled">Zip Code</InputLabel>
              <Input
                id='zip'
                onChange={props.handleInputChange}
                value={props.zip}
                className={classes.input}
                inputProps={{
                  'aria-label': 'description',
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} container direction="row">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-filled">Notes</InputLabel>
              <Input
                id='note'
                onChange={props.handleInputChange}
                multiline
                value={props.note}
                className={classes.input}
                inputProps={{
                  'aria-label': 'description',
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button id='submit' onClick={props.handleFormSubmit} variant="contained" className={classes.button}>
          Submit
      </Button>
      </Grid>
    </div>
  );
}

export default Form 