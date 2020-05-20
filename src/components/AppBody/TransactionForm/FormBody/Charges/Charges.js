import React from 'react';
import {
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
    flex: '1'
  },
  chargesHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px'
  },
  chargesTitle: {
    flex: '1'
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
        <Typography className={classes.chargesTitle} variant="h5">
          Charges
        </Typography>
        <Fab color="secondary" onClick={() => setDialogIsOpen(true)}>
          <AddIcon />
        </Fab>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service/Product</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {charges.map((charge, index) => (
              <TableRow key={`charge-row-${index}`}>
                <TableCell>
                  <Fab
                    className={classes.deleteButton}
                    onClick={() => removeCharge(index)}
                    color="secondary"
                    size="small"
                  >
                    <DeleteIcon />
                  </Fab>
                  {charge.label}
                </TableCell>
                <TableCell>${charge.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Charges;
