class Calculator {
  constructor(firstVal, secondValue) {
    this.val1 = firstVal;
    this.val2 = secondValue;
  }
  
  add() {
    let sum = this.val1 + this.val2;
    console.log(`The sum of ${this.val1} and ${this.val2} is ${sum}`);
  }
  
  subtract() {
    let difference = this.val1 - this.val2;
    console.log(`The difference between ${this.val1} and ${this.val2} is ${difference}`);
    
  }
  
  multiply() {
    let multiplication = this.val1 * this.val2;
        console.log(`${this.val1} mulitplied by ${this.val2} equals ${multiplication}`);
  }
  
  divide() {
    let division = this.val1 / this.val2;
        console.log(`${this.val1} divided by ${this.val2} equals ${division}`);
    
  }
}



let numbers =  new Calculator(9,3);
numbers.add();
numbers.subtract();
numbers.divide();
numbers.multiply();
