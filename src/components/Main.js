import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppHeader from './AppHeader/AppHeader';
import AppBody from './AppBody/AppBody';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}));

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const classes = useStyles();

  const tabs = [{ label: 'Transaction Form' }, { label: 'Customer Records' }];

  return (
    <div className={classes.root}>
      <AppHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
      ></AppHeader>
      <AppBody tabs={tabs} selectedTab={selectedTab}></AppBody>
    </div>
  );
};

export default Main;
