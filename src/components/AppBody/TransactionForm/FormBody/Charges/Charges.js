import React from 'react';
import {
  Button,
  makeStyles,
  Paper,
  Typography,
  Fab,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  chargesWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  chargesHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px'
  },
  chargesTitle: {
    padding: '15px'
  },
  deleteButton: {
    marginRight: '4px'
  }
}));

const Charges = ({ setDialogIsOpen, charges, removeCharge }) => {
  const classes = useStyles();
  return (
    <div className={classes.chargesWrapper}>
      <div className={classes.chargesHeader}>
        <div className={classes.chargesTitle}>
          <Typography variant="h5">Add Charge</Typography>
        </div>
        <Fab
          size="medium"
          color="secondary"
          onClick={() => setDialogIsOpen(true)}
        >
          <AddIcon />
        </Fab>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service/Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {charges.map((charge, index) => (
              <TableRow key={`charge-row-${index}`}>
                <TableCell>{charge.label}</TableCell>
                <TableCell>${charge.price}</TableCell>
                <TableCell>
                  <Button
                    className={classes.deleteButton}
                    onClick={() => removeCharge(index)}
                    size="small"
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Charges;
