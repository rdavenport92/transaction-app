import React, { useEffect, useState } from 'react';
import {
  Button,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import UserDetailsDialog from './UserDetailsDialog/UserDetailsDialog';
import { fetchTransactions } from '../../../utils/utils';

const useStyles = makeStyles(() => ({
  pointBalanceColTitle: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const showUserDetails = (user, setShowUserDialog, setSelectedUser) => {
  setSelectedUser(user);
  setShowUserDialog(true);
};

const CustomerRecords = () => {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    (async function () {
      const transactions = await fetchTransactions();
      setTransactions(transactions);
    })();
  }, []);

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email Name</TableCell>
              <TableCell>Total Spent</TableCell>
              <TableCell className={classes.pointBalanceColTitle}>
                Point Balance{' '}
                <Tooltip title="Points are calculated on a per transaction basis">
                  <InfoIcon
                    style={{
                      cursor: 'pointer'
                    }}
                  />
                </Tooltip>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((user, index) => (
              <TableRow key={`user-transaction-${index + 1}`}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>${user.totalSpent}</TableCell>
                <TableCell>{user.totalPoints}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      showUserDetails(user, setShowUserDialog, setSelectedUser)
                    }
                  >
                    details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserDetailsDialog
        user={selectedUser}
        showUserDialog={showUserDialog}
        closeUserDialog={() => setShowUserDialog(false)}
      />
    </React.Fragment>
  );
};

export default CustomerRecords;
