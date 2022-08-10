import Calculator from './Calculator.js';

const calculatorEl = document.querySelector('.calculator');
const primaryOperand = document.querySelector('.calculator__primary-operand');
const secondaryOperand = document.querySelector(
  '.calculator__secondary-operand'
);
const operation = document.querySelector('.calculator__top-operation');
  const notification = document.querySelector('.notification');

const calculator = new Calculator(primaryOperand, secondaryOperand, operation, notification);

calculatorEl.addEventListener('click', (e) => {
  if (e.target.matches('[data-all-clear]')) {
    calculator.clear();
  }
  if (e.target.matches('[data-number]')) {
    calculator.addDigit(e.target.textContent);
  }
  if (e.target.matches('[data-delete]')) {
    calculator.removeDigit();
  }
  if (e.target.matches('[data-operation]')) {
    calculator.chooseOperation(e.target.textContent);
  }
  if (e.target.matches('[data-equals]')) {
    calculator.evaluate();
  }
});
