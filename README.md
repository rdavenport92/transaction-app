# Transaction App

## About This App

This app is an experimental project. The app is designed to allow a user to enter a transaction with multiple charges. All of the charges are added up to calculate points earned per that transaction. The rules to calculate points are as follows: For every dollar spent above $100 on a single transaction, the customer earns 2 points. For every dollar over $50 and below or equal to $100, the user earns 1 point. The user will earn no points for transactions that are $50 and under. It is also important to note that any transaction totals that are of a float value, the total is rounded down to the nearest dollar. Additionally, it is important to note that all points are calculated on a per transaction basis - not on a total amount spent over all time. This is important to note while viewing the "Custmomer Records" as the Total Spent column does not translate to the Point Balance column if trying to follow these rules.

## Before You Begin

There is a script in this project that will fetch dummy users from a 3rd party database, reformat that data into fake transaction records and write it to a local JSON file under src/utils/mockData. The idea is to mock up a database. An initial file will exist, but you can refresh the data by running `yarn run generate-data` or the npm equivalent. Additionally, when using the Transaction Form, the data that is posted is stored within SessionStorage and retrived/combined with the data from the JSON whenever visiting Customer Records and "fetching" those records. The utils library is set up to be a gateway to allow for easy transitioning when the time comes to implement api calls to external services.
