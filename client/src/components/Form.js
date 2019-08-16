import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} container direction="row">
          <Input
            id='poNum'
            defaultValue="PO Number"
            className={classes.input}
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Grid item xs={12} container direction="row">
            <Input
              id='strtAddress'
              defaultValue="Street Address"
              className={classes.input}
              inputProps={{
                'aria-label': 'description',
              }}
            />
            <Input
              id='city'
              defaultValue="City"
              className={classes.input}
              inputProps={{
                'aria-label': 'description',
              }}
            />
            <Input
              id='zipCode'
              defaultValue="Zip Code"
              className={classes.input}
              inputProps={{
                'aria-label': 'description',
              }}
            />
          </Grid>
          <Grid item xs={12} container direction="row">
            <Input
              id='notes'
              multiline
              defaultValue="Notes"
              className={classes.input}
              inputProps={{
                'aria-label': 'description',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Form 