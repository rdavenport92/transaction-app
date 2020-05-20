import React, { useEffect, useState } from 'react';

import { fetchTransactions } from '../../../utils/utils';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    // finding unique dates
    const dates = transactions
      .map((transaction) => new Date(transaction.date).getMonth())
      .reduce((uniqueDates, currentDate) => {
        if (uniqueDates.filter((d) => d === currentDate).length === 0) {
          uniqueDates.push(currentDate);
          return uniqueDates;
        } else {
          return uniqueDates;
        }
      }, []);
    setAvailableDates(dates);
  }, [transactions]);

  useEffect(() => {
    (async function fetchTransactionData() {
      const transactions = await fetchTransactions();
      setTransactions(transactions);
    })();
  }, []);

  return (
    <div>
      <div>
        {availableDates.map((date) => {
          return <div>{monthNames[date]}</div>;
        })}
      </div>
      <div>Content here</div>
    </div>
  );
};

export default TransactionHistory;
