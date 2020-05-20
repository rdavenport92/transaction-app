const fs = require('fs');
const axios = require('axios');

const { convertPriceToPoints } = require('../src/utils/utils');

const pathToMockData = __dirname + '\\..\\src\\utils\\mockData';

const generateRandomNumber = (rangeMin, rangeMax) =>
  Math.floor(Math.random() * Math.floor(rangeMax + 1 - rangeMin)) + rangeMin;

async function getDummyUsers() {
  const userTransactionTemplate = [];

  // fetching pre-existing fake users template
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const userData = response.data.map((user) => {
    const firstName = user.name.split(' ')[0];
    const lastName = user.name.split(' ')[1];
    return {
      firstName,
      lastName,
      email: `${firstName}${lastName}@email.com`
    };
  });

  // create an array with multiple users to represent multiple transactions per that user
  userData.forEach((user) => {
    const randomTransactionQTY = generateRandomNumber(2, 5);
    for (let i = 0; i < randomTransactionQTY; i++) {
      userTransactionTemplate.push(user);
    }
  });
  return userTransactionTemplate;
}

async function generateTransactionData(users) {
  const transactionData = await Promise.all(
    users.map(async (user) => {
      // generating charges
      const charges = [];
      let chargesQty = generateRandomNumber(1, 4);
      for (let i = 0; i < chargesQty; i++) {
        const price = Math.round(100 * (Math.random() * 350)) / 100;
        const charge = { label: `Charge ${i + 1}`, price };
        charges.push(charge);
      }

      // calculating total price
      const totalPrice =
        Math.round(
          charges.reduce((currentTotal, currentCharge) => {
            return currentTotal + currentCharge.price;
          }, 0) * 100
        ) / 100;

      // converting price to points
      const totalPoints = await convertPriceToPoints(totalPrice);

      // generating random month ranging from now to 3 months ago
      const currentMonth = new Date().getMonth();
      const monthToUse = currentMonth - generateRandomNumber(0, 3);
      const date = new Date(2020, monthToUse);

      return {
        date,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        charges,
        total: totalPrice,
        points: totalPoints
      };
    })
  );
  return transactionData;
}

function generateFile(transactionData) {
  const data = JSON.stringify(transactionData);
  fs.writeFileSync(pathToMockData + '\\mockData.json', data);
}

async function main() {
  const users = await getDummyUsers();
  const transactionData = await generateTransactionData(users);
  generateFile(transactionData);
}

main();
