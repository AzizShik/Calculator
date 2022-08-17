export default class Calculator {
  constructor(primaryOperand, secondaryOperand, operation, notification) {
    this.primaryOperand = primaryOperand;
    this.secondaryOperand = secondaryOperand;
    this.operation = operation;
    this.notification = notification;

    this.clear();
  }

  clear() {
    this.primaryOperand.textContent = 0;
    this.operation.textContent = '';
    this.secondaryOperand.textContent = '';
  }

  addDigit(value) {
    if (this.primaryOperand.textContent[0] === '0') {
      this.primaryOperand.textContent = value;
      return;
    }
    this.primaryOperand.textContent += value;
  }

  removeDigit() {
    const value = this.primaryOperand.textContent;
    if (value.length <= 1) {
      this.primaryOperand.textContent = 0;
      return;
    }
    this.primaryOperand.textContent = value.substring(0, value.length - 1);
  }

  chooseOperation(operation) {
    const lastOperation = this.operation.textContent;

    if (lastOperation) {
      this.operation.textContent = operation;
      return;
    }

    this.secondaryOperand.textContent = this.primaryOperand.textContent;
    this.operation.textContent = operation;
    this.primaryOperand.textContent = 0;
  }

  evaluate() {
    console.log(this.operation.textContent);
    const value1 = parseFloat(this.secondaryOperand.textContent);
    const value2 = parseFloat(this.primaryOperand.textContent);
    this.primaryOperand.textContent = OPERATIONS[this.operation.textContent](
      value1,
      value2
    );
    this.secondaryOperand.textContent = '';
    this.operation.textContent = '';
  }
}

const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};
