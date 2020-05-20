import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ChargesDetails = ({ transaction }) => {
  return (
    <React.Fragment>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Total Charges: {transaction.charges.length}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer>
            <Table>
              <TableBody>
                {transaction.charges.map((charge, index) => (
                  <TableRow key={`charge-${index + 1}`}>
                    <TableCell>{`${charge.label}:`}</TableCell>
                    <TableCell>{`$${charge.price}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default ChargesDetails;
