import Calculator from './Calculator.js';
import Theme from './Theme.js';

window.addEventListener('load', () => {
  const primaryOperand = document.querySelector('.calculator__primary-operand');
  const secondaryOperand = document.querySelector(
    '.calculator__secondary-operand'
  );
  const operation = document.querySelector('.calculator__top-operation');
  const notification = document.querySelector('.notification');
  const themeInputs = document.querySelectorAll('.theme__input');
  const bodyEl = document.querySelector('body');

  const calculator = new Calculator(
    primaryOperand,
    secondaryOperand,
    operation,
    notification
  );

  const theme = new Theme(bodyEl, themeInputs);
  theme.createItem();
  theme.loadLS();

  window.addEventListener('click', (e) => {
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
    if (e.target.classList.contains('theme__input')) {
      theme.changeTheme();
    }
  });
});
