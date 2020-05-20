import React, { useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import CustomerInfo from './CustomerInfo/CustomerInfo';
import Charges from './Charges/Charges';
import AddChargeDialog from './AddChargeDialog/AddChargeDialog';

const useStyles = makeStyles(() => ({
  formWrapper: {
    marginTop: '15px',
    width: '95%',
    margin: '15px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  formPaper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}));

const removeCharge = (index, charges, setCharges) => {
  const newCharges = charges.filter((_charge, i) => i !== index);
  setCharges(newCharges);
};

const FormBody = ({
  charges,
  setCharges,
  customerFirstName,
  setCustomerFirstName,
  customerLastName,
  setCustomerLastName,
  customerEmail,
  setCustomerEmail
}) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.formWrapper}>
      <Paper className={classes.formPaper} variant="outlined">
        <CustomerInfo
          customerFirstName={customerFirstName}
          setCustomerFirstName={setCustomerFirstName}
          customerLastName={customerLastName}
          setCustomerLastName={setCustomerLastName}
          customerEmail={customerEmail}
          setCustomerEmail={setCustomerEmail}
        />

        <Charges
          setDialogIsOpen={setDialogIsOpen}
          charges={charges}
          removeCharge={(index) => removeCharge(index, charges, setCharges)}
        />
      </Paper>
      <AddChargeDialog
        charges={charges}
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        setCharges={setCharges}
      ></AddChargeDialog>
    </div>
  );
};

export default FormBody;
