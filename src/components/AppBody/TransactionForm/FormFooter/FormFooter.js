import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerWrapper: {
    display: 'flex',
    alignItems: 'center',
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
  },
  total: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  points: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    flex: 1
  }
}));

const FormFooter = ({ total, points, submitTransaction }) => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.footerWrapper}>
        <div className={classes.total}>
          <Typography variant="h5">Total: ${total}</Typography>
        </div>
        <div className={classes.points}>
          <Typography variant="h5">Points: {points}</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="secondary"
            onClick={submitTransaction}
          >
            submit
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FormFooter;
