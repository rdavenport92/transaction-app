exports.convertPriceToPoints = (price) =>
  // simulating fetching to accomplish this conversion to avoid declaring conversion rules in the UI

  new Promise((res) => {
    let points = 0;

    if (price > 100) {
      const remainder = price - 100;
      points += Math.round(+(remainder * 2).toFixed(2) + 50);
    } else if (price > 50) {
      const remainder = price - 50;
      points += remainder;
    }

    res(points);
  });

exports.postTransaction = (transactionDetails) =>
  // simulating posting a transaction to the back end
  new Promise((res) => {
    res(transactionDetails);
  });
