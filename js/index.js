// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  let subtotalPrice = price * quantity

  let subtotal = product.querySelector('.subtotal span')

  subtotal.innerText = subtotalPrice

  return parseFloat(subtotal.innerText)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  const products = document.getElementsByClassName('product')
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }
   
  // ITERATION 3
  let totalPrice = document.querySelector('h2 span')

  totalPrice.innerText = total;
  
  return products
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
