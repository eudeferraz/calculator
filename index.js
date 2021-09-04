const numbersButton = document.querySelectorAll('[data-num]');
const operatorsButton = document.querySelectorAll('[data-ops]');
const clearButton = document.getElementById('clear');
const viewerTextElement = document.getElementById('viewer')
const equalsButton = document.querySelector('equals');
const numberZeroButton = document.querySelector('number-zero');
const firstOperandTextElement = document.getElementById('firstElement');
const secondOperandTextElement = document.getElementById('secondElement');

const displayVal = '';

const updateDisplayValue = (clickBtn) => {
  const btnText = clickBtn.target.innerText;

  viewerTextElement.innerText = btnText;
}

numbersButton.forEach(button => {
  button.addEventListener('click', updateDisplayValue, false)
})

// operatorsButton.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.getOperator(button.innerText);
//   })
// })

// clearButton.addEventListener('click', () => {
//   calculator.clear();
//   calculator.updateDisplay();
// })