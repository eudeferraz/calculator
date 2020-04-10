const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};


const keys = document.querySelector('.calculator')
keys.addEventListener('click', (event) => {
  const {target} = event
  if (!target.matches('button')){
    return
  }

  if (target.classList.contains('number')){
    console.log('operator', target.innerHTML)
    return
  }

  if (target.classList.contains('ops')){
    console.log('operator', target.innerHTML)
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