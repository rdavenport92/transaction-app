import React, { useEffect, useState } from 'react';

import { fetchTransactions } from '../../../utils/utils';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

const CustomerRecords = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async function fetchTransactionData() {
      const transactions = await fetchTransactions();
      setTransactions(transactions);
    })();
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email Name</TableCell>
            <TableCell>Total Spent</TableCell>
            <TableCell>Point Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((user, index) => (
            <TableRow key={`user-transaction-${index + 1}`}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.totalSpent}</TableCell>
              <TableCell>{user.totalPoints}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerRecords;
