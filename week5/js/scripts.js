// function to prompt user for radius
function getRadius() {
    let radius = prompt("Enter the radius of the circle");
    return parseFloat(radius);
}

// function to calculate the area of a circle
function calculateArea(radius) {
  if (isNaN(radius) || radius <= 0) {
    return "Invalid input! Please enter a positive number.";
  }
  return Math.PI * radius * radius;
}

//function to call the getRadius and calculateArea functions
function calculateCircleArea() {
  let radius = getRadius();
  let area = calculateArea(radius);
  
  document.getElementById("radius").textContent = `Value provided by the user: ${radius}`;
  document.getElementById("result").textContent = `Area: ${area}`;
}

// Shopping List Functionality
let shoppingItems = ["bread", "cheese", "green pepper"];

// function to add an item to the shopping list
function populateShopingList() {
  let ul = document.querySelector(".shopping");
  ul.innerHTML = "";

  shoppingItems.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// function call to populate the shopping list
populateShopingList();