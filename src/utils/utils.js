// this file consists of functions that are either intented to ultimately interface with
// 3rd party services or are functions that would exist outside of the UI

exports.formatTransactions = (transactions) => {
  // reformatting shape of data to consolidate all transactions per one user
  const sortedTransactionsByEmail = transactions.sort((a, b) =>
    a.email.localeCompare(b.email)
  );
  const reformattedTransactions = [];
  sortedTransactionsByEmail.reduce(
    (allUserTransactions, currentTransaction, index) => {
      if (!!allUserTransactions.email) {
        if (allUserTransactions.email === currentTransaction.email) {
          allUserTransactions.transactions.push({
            date: currentTransaction.date,
            total: currentTransaction.total,
            points: currentTransaction.points,
            charges: currentTransaction.charges
          });
          const newTotal =
            Math.round(
              (allUserTransactions.totalSpent + currentTransaction.total) * 100
            ) / 100;

          allUserTransactions.totalSpent = newTotal;
          allUserTransactions.totalPoints += currentTransaction.points;
          if (index === sortedTransactionsByEmail.length - 1) {
            // on the last item, go ahead and push
            reformattedTransactions.push(allUserTransactions);
          }
          return allUserTransactions;
        } else {
          reformattedTransactions.push(allUserTransactions);
        }
      }
      const newTransactionUser = {
        firstName: currentTransaction.firstName,
        lastName: currentTransaction.lastName,
        email: currentTransaction.email,
        transactions: [
          {
            date: currentTransaction.date,
            total: currentTransaction.total,
            points: currentTransaction.points,
            charges: currentTransaction.charges
          }
        ],
        totalSpent: currentTransaction.total,
        totalPoints: currentTransaction.points
      };
      if (index === sortedTransactionsByEmail.length - 1) {
        // user only has 1 transaction and it is the final in the array
        reformattedTransactions.push(newTransactionUser);
      }
      return newTransactionUser;
    },
    {}
  );
  return reformattedTransactions;
};

exports.convertPriceToPoints = (price) =>
  // simulating fetching to accomplish this conversion to avoid declaring conversion rules in the UI

  new Promise((res) => {
    let points = 0;
    const floorPrice = Math.floor(price);

    if (floorPrice > 100) {
      const remainder = floorPrice - 100;
      points += +(remainder * 2) + 50;
    } else if (floorPrice > 50) {
      const remainder = floorPrice - 50;
      points += remainder;
    }

    res(points);
  });

exports.postTransaction = (transactionDetails) =>
  // simulating posting a transaction to the back end
  new Promise((res) => {
    const transactions = JSON.parse(
      sessionStorage.getItem('transaction-collection') || '[]'
    );
    transactions.push(transactionDetails);
    sessionStorage.setItem(
      'transaction-collection',
      JSON.stringify(transactions)
    );
    res(transactionDetails);
  });

exports.fetchTransactions = () => {
  return new Promise((res) => {
    const generatedTransactions = require('./mockData/mockData.json');
    const userCreatedTransactions = JSON.parse(
      sessionStorage.getItem('transaction-collection') || '[]'
    );
    // server responsible for formatting data structure before providing to client
    const allFormatedTransactions = formatTransactions([
      ...generatedTransactions,
      ...userCreatedTransactions
    ]);
    res(allFormatedTransactions);
  });
};
