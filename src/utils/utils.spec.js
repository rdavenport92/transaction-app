import { convertPriceToPoints, formatTransactions } from './utils';

describe('Price to Points converter', () => {
  it('should accurately convert price to total points', async () => {
    const pairs = [
      {
        price: 503,
        points: 856
      },
      {
        price: 49.99,
        points: 0
      },
      {
        price: 51.99,
        points: 1
      },
      {
        price: 101.99,
        points: 52
      }
    ];
    for (const { price, points } of pairs) {
      const calculatedPrice = await convertPriceToPoints(price);
      expect(calculatedPrice).toBe(points);
    }
  });
});

describe('Transaction Formatter', () => {
  const transactions = require('./mockData/testMockData.json');
  const formattedTransactions = formatTransactions(transactions);
  const getUserByEmail = (email) =>
    formattedTransactions.find((transaction) => transaction.email === email);

  it('should have an accurate amount of transactions and charges per user', () => {
    // only 1 transaction for this user
    const leanne = getUserByEmail('LeanneGraham@email.com');
    expect(leanne.transactions.length).toBe(1);
    expect(leanne.transactions[0].charges.length).toBe(2);
    // transactions from end of array
    const clementina = getUserByEmail('ClementinaDuBuque@email.com');
    expect(clementina.transactions.length).toBe(5);
    expect(clementina.transactions[0].charges.length).toBe(1);
    expect(clementina.transactions[4].charges.length).toBe(4);
  });

  it('should maintain appropriate shape', () => {
    const keys = [
      'firstName',
      'lastName',
      'email',
      'transactions',
      'totalSpent',
      'totalPoints'
    ];
    const transactionKeys = ['date', 'total', 'points', 'charges'];
    const chargeKeys = ['label', 'price'];
    const ervin = getUserByEmail('ErvinHowell@email.com');

    expect(Object.keys(ervin).sort()).toEqual(keys.sort());
    expect(Object.keys(ervin.transactions[0]).sort()).toEqual(
      transactionKeys.sort()
    );
    expect(Object.keys(ervin.transactions[0].charges[0]).sort()).toEqual(
      chargeKeys.sort()
    );
  });
});
