import { convertPriceToPoints } from './utils';

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
