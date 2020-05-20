import React from 'react';

import { makeStyles, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  customerInfo: {
    padding: '15px'
  },
  titleAndClearWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  customerInfoForm: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  textField: {
    flex: 1,
    padding: '8px'
  }
}));

const CustomerInfo = ({
  customerFirstName,
  setCustomerFirstName,
  customerLastName,
  setCustomerLastName,
  customerEmail,
  setCustomerEmail,
  clearTransaction,
  clearTransactionBtnDisabled
}) => {
  const classes = useStyles();
  return (
    <div className={classes.customerInfo}>
      <div className={classes.titleAndClearWrapper}>
        <Typography variant="h5">Customer Info</Typography>
        <Button
          disabled={clearTransactionBtnDisabled}
          color="primary"
          onClick={clearTransaction}
        >
          clear transaction
        </Button>
      </div>
      <br />
      <form onSubmit={(e) => e.preventDefault}>
        <div className={classes.customerInfoForm}>
          <TextField
            className={classes.textField}
            value={customerFirstName}
            onChange={(e) => setCustomerFirstName(e.target.value)}
            required
            label="First Name"
          ></TextField>
          <TextField
            className={classes.textField}
            value={customerLastName}
            onChange={(e) => setCustomerLastName(e.target.value)}
            required
            label="Last Name"
          ></TextField>
          <TextField
            className={classes.textField}
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
            label="Email"
            type="email"
          ></TextField>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
