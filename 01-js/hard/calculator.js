/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {

  constructor(){
    this.result = 0;
  }

  sum(value){
    this.result += value;
  }

  subtract(value){
    this.result-=value;
  }

  multi(value){
    this.result *= value;
  }

  divide(value){
    if(value === 0){
      throw console.error("Can not divide by zero");
    }
    this.result /= value;
  }

  clear(){
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression){
    const parsedExpression = expression.replace(/\s+/g, '');
    const result = eval(parsedExpression); // Warning: Using eval is generally discouraged due to security risks

    if (isNaN(result)) {
      throw new Error("Invalid expression");
    }

    this.result = result;
  }
}

const result = new Calculator(0);

result.calculate("10/2      + 7*2");
console.log(result.getResult());
module.exports = Calculator;