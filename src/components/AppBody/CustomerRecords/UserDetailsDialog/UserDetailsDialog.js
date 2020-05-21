import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  DialogActions,
  Button
} from '@material-ui/core';

import Filter from '../Filter/Filter';
import ChargesDetails from './ChargesDetails/ChargesDetails';

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const addReducer = (transactions, key) =>
  transactions
    ? Math.floor(
        // TODO: need to write a helper function for dealing with currency values
        // and replace everywhere that those values are dealt with
        transactions.reduce((total, currentTransaction) => {
          console.log(currentTransaction, total);
          return (total += currentTransaction[key]);
        }, 0) * 100
      ) / 100
    : undefined;

const calculateTotalSpent = (transactions) => addReducer(transactions, 'total');

const calculateTotalPoints = (transactions) =>
  addReducer(transactions, 'points');

const UserDetailsDialog = ({ user, showUserDialog, closeUserDialog }) => {
  const [filterParamValue, setFilterParamValue] = useState('');
  const [
    userWithFilteredTransactions,
    setUserWithFilteredTransactions
  ] = useState(user);

  useEffect(() => {
    setUserWithFilteredTransactions(user);
  }, [user]);

  useEffect(() => {
    // filtering values and updating the transactions whenver filter params change
    if (filterParamValue === '') {
      setUserWithFilteredTransactions(user);
    } else {
      const key = filterParamValue.key;
      const filteredTransactions = user.transactions.filter((transaction) =>
        filterParamValue.testCondition(transaction[key])
      );
      const updatedUser = {
        ...user,
        transactions: filteredTransactions
      };
      setUserWithFilteredTransactions(updatedUser);
    }
  }, [filterParamValue]);

  return (
    <Dialog open={showUserDialog} onClose={closeUserDialog}>
      <DialogTitle>{`${user.firstName} ${user.lastName}`}</DialogTitle>
      <Filter setFilterParamValue={setFilterParamValue} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Points Earned</TableCell>
              <TableCell>Charges</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userWithFilteredTransactions.transactions &&
              userWithFilteredTransactions.transactions.map((t, index) => {
                const formattedDate = formatDate(new Date(t.date));
                return (
                  <TableRow key={`user-${index + 1}`}>
                    <TableCell>{formattedDate}</TableCell>
                    <TableCell>${t.total}</TableCell>
                    <TableCell>{t.points}</TableCell>
                    <TableCell>
                      <ChargesDetails transaction={t} />
                    </TableCell>
                  </TableRow>
                );
              })}
            <TableRow>
              <TableCell>
                <strong>Totals:</strong>
              </TableCell>
              <TableCell>
                $
                {calculateTotalSpent(userWithFilteredTransactions.transactions)}
              </TableCell>
              <TableCell>
                {calculateTotalPoints(
                  userWithFilteredTransactions.transactions
                )}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <DialogActions>
        <Button onClick={closeUserDialog}>close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailsDialog;
