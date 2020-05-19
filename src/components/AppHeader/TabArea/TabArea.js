import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

const TabArea = ({ classes, selectedTab, setSelectedTab, tabs }) => {
  return (
    <div className={classes.menu}>
      <Tabs
        value={selectedTab}
        onChange={(_e, newValue) => setSelectedTab(newValue)}
      >
        {tabs.map((tab, index) => (
          <Tab label={tab.label} key={`tab-${index}`} />
        ))}
      </Tabs>
    </div>
  );
};

export default TabArea;
