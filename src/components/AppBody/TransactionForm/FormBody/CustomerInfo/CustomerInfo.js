import React from 'react';

import { makeStyles, Paper, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  customerInfo: {
    padding: '15px'
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
  setCustomerEmail
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.customerInfo}>
      <Typography variant="h5">Customer Info</Typography>
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
    </Paper>
  );
};

export default CustomerInfo;
