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

function calculateTotalPrice(flavor, size, toppings) {
  let basePrice = prices.flavors[flavor] || 0;
  let sizeMultiplier = prices.sizes[size] || 1;
  let toppingsPrice = toppings.reduce((total, topping) => total + (prices.toppings[topping] || 0), 0)
  return sizeMultiplier * (basePrice + toppingsPrice);
}

function displayOrderSummary(order) {
  console.log(`You ordered a ${order.size} ${order.flavor} bubble tea with ${order.toppings.join(', ')}.`);
  console.log(`Total Price: $${order.finalPrice.toFixed(2)}.`);
}

function placeOrder(flavor, size, toppings) {
  let finalPrice = calculateTotalPrice(flavor, size, toppings);
  let order = { flavor, size, toppings, finalPrice };
  displayOrderSummary(order);
}

// Test the function
placeOrder('mango', 'medium', ['boba', 'pudding']);