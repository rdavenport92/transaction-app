import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import FormBody from './FormBody/FormBody';
import FormFooter from './FormFooter/FormFooter';

import { convertPriceToPoints, postTransaction } from '../../../utils/utils';

const useStyles = makeStyles(() => ({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center'
  }
}));

// utils

const calculateTotal = (charges) =>
  charges.reduce(
    (prevTotal, currentCharge) =>
      Math.round((prevTotal + currentCharge.price) * 100) / 100,
    0
  );

const calculatePoints = async (totalPrice) => {
  return await convertPriceToPoints(totalPrice);
};

// component

const submitTransaction = async (
  transactionDetails,
  setCharges,
  setCustomerFirstName,
  setCustomerLastName,
  setCustomerEmail
) => {
  const result = await postTransaction(transactionDetails);
  if (result) {
    // TODO: success toast message
    clearTransaction(
      setCharges,
      setCustomerFirstName,
      setCustomerLastName,
      setCustomerEmail
    );
  }
  // TODO: handle failed post
};

const clearTransaction = (
  setCharges,
  setCustomerFirstName,
  setCustomerLastName,
  setCustomerEmail
) => {
  setCharges([]);
  setCustomerFirstName('');
  setCustomerLastName('');
  setCustomerEmail('');
};

const TransactionForm = () => {
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [charges, setCharges] = useState([]);
  const [total, setTotal] = useState(0);
  const [points, setPoints] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    // calculating total and points whenever charges are updated
    (async function handleChargeUpdate() {
      const newTotal = calculateTotal(charges);
      setTotal(newTotal);
      const newPoints = await calculatePoints(newTotal);
      setPoints(newPoints);
    })();
  }, [charges]);

  return (
    <div className={classes.mainWrapper}>
      <FormBody
        charges={charges}
        setCharges={setCharges}
        customerFirstName={customerFirstName}
        setCustomerFirstName={setCustomerFirstName}
        customerLastName={customerLastName}
        setCustomerLastName={setCustomerLastName}
        customerEmail={customerEmail}
        setCustomerEmail={setCustomerEmail}
        clearTransaction={() =>
          clearTransaction(
            setCharges,
            setCustomerFirstName,
            setCustomerLastName,
            setCustomerEmail
          )
        }
      ></FormBody>
      <FormFooter
        total={total}
        points={points}
        submitTransaction={() =>
          submitTransaction(
            {
              date: new Date(),
              firstName: customerFirstName,
              lastName: customerLastName,
              email: customerEmail,
              charges,
              total,
              points
            },
            setCharges,
            setCustomerFirstName,
            setCustomerLastName,
            setCustomerEmail
          )
        }
      ></FormFooter>
    </div>
  );
};

export default TransactionForm;
