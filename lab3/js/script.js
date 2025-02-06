







document.addEventListener('DOMContentLoaded', function() {
  // prices data
  const prices = {
    flavors: {
        original: 2.5,
        mango: 3.0,
        strawberry: 3.5
    },
    sizes: {
        small: 1.0,
        medium: 1.5,
        large: 2.0
    },
    toppings: {
        boba: 0.5,
        jelly: 0.75,
        pudding: 1.0
    }
  };

  // get dom elements
  const flavorSelect = document.getElementById('flavor');
  const sizeSelect = document.getElementById('size');
  const toppingsSelect = document.getElementById('toppings');
  const orderSummary = document.getElementById('order-summary');
  const placeOrderBtn = document.getElementById('place-order');

  let orderDetails = document.querySelector("#order-summary p");
  if (!orderDetails) {
      orderDetails = document.createElement("p");
      orderSummary.appendChild(orderDetails);
  }

  // add event listener to place order button
  placeOrderBtn.addEventListener("click", function (event) {
    event.preventDefault();
    placeOrder();
  });

  function calculateTotalPrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor] || 0;
    let sizeMultiplier = prices.sizes[size] || 1;
    let toppingsPrice = toppings.reduce((total, topping) => total + (prices.toppings[topping] || 0), 0)
    return sizeMultiplier * (basePrice + toppingsPrice);
  }

  function placeOrder() {
    const flavor = flavorSelect.value;
    const size = sizeSelect.value;
    const toppings = Array.from(toppingsSelect.selectedOptions).map(option => option.value);

    if (!flavor || !size) {
      alert('Please select both a flavor and a size.');
      return;
    }

    // calculate total price
    let finalPrice = calculateTotalPrice(flavor, size, toppings);

    // display order summary
    let order = {flavor, size, toppings, finalPrice};
    displayOrderSummary(order);
  }

  function displayOrderSummary(order) {
    let toppingsText = order.toppings.length > 0 ? ` with ${order.toppings.join(', ')}` : 'None';

    // update order details text
    orderDetails.innerHTML = 
      `
        <strong>Flavor:</strong> ${order.flavor} <br>
        <strong>Size:</strong> ${order.size} <br>
        <strong>Toppings:</strong> ${toppingsText} <br>
        <strong>Total Price:</strong> $${order.finalPrice.toFixed(2)}
      `;
  }
});