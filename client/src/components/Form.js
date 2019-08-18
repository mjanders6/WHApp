import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// 
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// 
import moment from 'moment'

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
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    date: moment().format("MM-DD-YYYY"),
    tomorrow: moment().add(1, 'days').format("MM-DD-YYYY")
  });

  const inputLabel = React.useRef(null);
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Purchase Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the PO information so we can pickup accordingly. Pickups for today must be submitted before 10am otherwise the PO will be scheduled for pickup tomorrow.
          </DialogContentText>
          <div className={classes.root}>
            <Grid container spacing={0}>
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
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="component-filled">Pickup Date</InputLabel>
                  <Select
                    value={values.date}
                    onChange={handleChange}
                    inputProps={{
                      name: 'date',
                      id: 'pickup-date',
                    }}
                  >
                    <MenuItem value={values.date}>Today</MenuItem>
                    <MenuItem value={values.tomorrow}>Tomorrow</MenuItem>
                  </Select>
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
                  <FormControl className={classes.formControl} fullWidth={true}>
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
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button id='cancel' onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button id='submit' onClick={props.handleFormSubmit} color="primary">
            Submit
      </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Form 