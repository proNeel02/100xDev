/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

const map = new Map();

for(let i = 0; i < transactions.length; i++){

  const {price, category} = transactions[i];

  if(!map.has(category)){
    map.set(category,price);   
  }else{
    map.set(category,map.get(category)+price);
  }
}


const result = [];
for(let [key,value] of map){
  const obj = {
  }

  obj[key] = value;

  result.push(obj);
}
console.log(result);
console.log(map);

}

const transactions = [
  { itemName: 'Item 1', category: 'Category 1', price: 10, timestamp: '2023-01-01' },
  { itemName: 'Item 2', category: 'Category 2', price: 20, timestamp: '2023-01-02' },
  { itemName: 'Item 3', category: 'Category 1', price: 15, timestamp: '2023-01-03' },
  { itemName: 'Item 4', category: 'Category 2', price: 25, timestamp: '2023-01-04' },
  { itemName: 'Item 5', category: 'Category 1', price: 5, timestamp: '2023-01-05' },
];

calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
