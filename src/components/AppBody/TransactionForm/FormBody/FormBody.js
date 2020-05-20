import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

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
    flexDirection: 'column'
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
  setCustomerEmail,
  clearTransaction,
  clearTransactionBtnDisabled
}) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.formWrapper}>
      <CustomerInfo
        customerFirstName={customerFirstName}
        setCustomerFirstName={setCustomerFirstName}
        customerLastName={customerLastName}
        setCustomerLastName={setCustomerLastName}
        customerEmail={customerEmail}
        setCustomerEmail={setCustomerEmail}
        clearTransaction={clearTransaction}
        clearTransactionBtnDisabled={clearTransactionBtnDisabled}
      />

      <Charges
        setDialogIsOpen={setDialogIsOpen}
        charges={charges}
        removeCharge={(index) => removeCharge(index, charges, setCharges)}
      />

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
