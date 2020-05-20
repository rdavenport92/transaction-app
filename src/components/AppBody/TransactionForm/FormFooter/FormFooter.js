import React from 'react';
import {
  Toolbar,
  Typography,
  Button,
  Paper,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: 0,
    width: '100%'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    height: '100%'
  }
}));

const FormFooter = ({ total, points, clearTransaction, submitTransaction }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.footerWrapper}>
      <Paper elevation={5} variant="outlined" className={classes.footer}>
        <Typography variant="h5">Total: {total}</Typography>
        <Typography variant="h5">Points: {points}</Typography>
        <Button color="primary" onClick={clearTransaction}>
          clear
        </Button>
        <Button variant="contained" color="primary" onClick={submitTransaction}>
          submit
        </Button>
      </Paper>
    </Toolbar>
  );
};

export default FormFooter;
