import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TabArea from './TabArea/TabArea';

const useStyles = makeStyles(() => ({
  menu: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const AppHeader = ({ selectedTab, setSelectedTab, tabs }) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Transaction App</Typography>
        <TabArea
          classes={classes}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={tabs}
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
