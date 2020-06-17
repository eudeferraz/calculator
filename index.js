const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function showValue(number) {
  const element = document.getElementById('viewer')
  element.innerHTML = number
}

// function fixOperatorButton(elementId) {
//   const element = document.getElementById(`${elementId}`)
//   element.style.removeProperty('background-color')
//   element.style.backgroundColor = '#fafaf5'
//   element.style.color = 'orange'
// }


const keys = document.querySelector('.calculator')
keys.addEventListener('click', (event) => {
  const {target} = event
  if (!target.matches('button')){
    return
  }

  if (target.classList.contains('number')){
    showValue(target.innerHTML)
    return
  }

  if (target.classList.contains('ops')){
    console.log(target.id)
    return
  }

  if (target.classList.contains('number-zero')){
    console.log('operator', target.innerHTML)
    return
  }

  if (target.classList.contains('equals')){
    console.log('operator', target.innerHTML)
    return
  }

  if (target.classList.contains('clear')){
    console.log('operator', target.innerHTML)
    return
  }
})