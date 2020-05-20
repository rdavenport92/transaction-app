import React from 'react';
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

import ChargesDetails from './ChargesDetails/ChargesDetails';

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const UserDetailsDialog = ({ user, showUserDialog, closeUserDialog }) => {
  return (
    <Dialog open={showUserDialog} onClose={closeUserDialog}>
      <DialogTitle>{`${user.firstName} ${user.lastName}`}</DialogTitle>
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
            {user.transactions &&
              user.transactions.map((t, index) => {
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
              <TableCell>${user.totalSpent}</TableCell>
              <TableCell>{user.totalPoints}</TableCell>
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
