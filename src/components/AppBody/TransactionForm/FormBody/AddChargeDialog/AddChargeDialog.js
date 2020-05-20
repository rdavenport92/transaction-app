import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formInputsContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

// handlers

const handleClose = (setDialogIsOpen) => setDialogIsOpen(false);
const handleSubmit = (
  e,
  chargeLabel,
  setChargeLabel,
  chargePrice,
  setChargePrice,
  charges,
  setCharges,
  setDialogIsOpen
) => {
  e.preventDefault();
  // form validation responsible for ensuring price is can be converted into an int
  const newCharge = { label: chargeLabel, price: +chargePrice };
  const newCharges = [...charges, newCharge];
  setCharges(newCharges);
  setChargeLabel('');
  setChargePrice(0.0);
  setDialogIsOpen(false);
};

// component

const AddChargeDialog = ({
  charges,
  dialogIsOpen,
  setDialogIsOpen,
  setCharges
}) => {
  const [chargeLabel, setChargeLabel] = useState('');
  const [chargePrice, setChargePrice] = useState(0.0);

  const classes = useStyles();

  return (
    <Dialog open={dialogIsOpen} onClose={() => handleClose(setDialogIsOpen)}>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            chargeLabel,
            setChargeLabel,
            chargePrice,
            setChargePrice,
            charges,
            setCharges,
            setDialogIsOpen
          )
        }
      >
        <DialogTitle>Add New Charge</DialogTitle>
        <DialogContent className={classes.formInputsContainer}>
          <TextField
            required
            label="Service/Product"
            value={chargeLabel}
            onChange={(e) => setChargeLabel(e.target.value)}
          />
          <TextField
            required
            type="number"
            label="Price"
            step={0.01}
            value={chargePrice}
            onChange={(e) => setChargePrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(setDialogIsOpen)}>cancel</Button>
          <Button variant="contained" color="primary" type="submit">
            submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddChargeDialog;
