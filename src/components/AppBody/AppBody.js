import React from 'react';

import TransactionForm from './TransactionForm/TransactionForm';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const renderBody = (tabs, selectedTab) => {
  const activeTabLabel = tabs[selectedTab].label;
  switch (activeTabLabel) {
    case 'Transaction Form':
      return <TransactionForm></TransactionForm>;
    case 'History':
      return <TransactionHistory></TransactionHistory>;
    default:
      break;
  }
};

const AppBody = ({ tabs, selectedTab }) => (
  <React.Fragment>{renderBody(tabs, selectedTab)}</React.Fragment>
);

export default AppBody;
