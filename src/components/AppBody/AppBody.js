import React from 'react';

import TransactionForm from './TransactionForm/TransactionForm';
import CustomerRecords from './CustomerRecords/CustomerRecords';

const renderBody = (tabs, selectedTab) => {
  const activeTabLabel = tabs[selectedTab].label;
  switch (activeTabLabel) {
    case 'Transaction Form':
      return <TransactionForm></TransactionForm>;
    case 'Customer Records':
      return <CustomerRecords></CustomerRecords>;
    default:
      break;
  }
};

const AppBody = ({ tabs, selectedTab }) => (
  <React.Fragment>{renderBody(tabs, selectedTab)}</React.Fragment>
);

export default AppBody;
