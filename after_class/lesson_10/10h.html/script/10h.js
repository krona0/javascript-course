function handleCostKeydown() {
  if (event.key === 'Enter') {
  calculateTotal()
  }
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

function calculateTotal() {

  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if(cost < 40 && cost > 0){
    cost = cost + 10;
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
  } else if (cost < 0) {
    cost = 'Error: cost cannot be less than $0'
    efError();
    document.querySelector('.js-total-cost')
    .innerHTML = `${cost}`;
  }
}

function efError() {
  const errorElement = document.querySelector('.js-total-cost');
  errorElement.classList.add('error-cost')
}