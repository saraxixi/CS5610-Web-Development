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

// function to change list marker to square
function applySquareMarker() {
  let ul = document.querySelector(".shopping");

  // use classList.add()
  ul.classList.add("squareList");

  // use setAttribute()
  // ul.setAttribute("class", "squareList");
}

function highlightGreenItems() {
  let listItems = document.querySelectorAll(".shopping li");

  listItems.forEach(item => {
    if (item.textContent.toLocaleLowerCase().includes("green")) {
      item.classList.add("greenText");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("updateImage");
  const image = document.getElementById("shoppingCart");

  button.addEventListener("click", function() {
    if (button.textContent === "Click Me!") {
      button.textContent = "Clicked!";
    } else {
      button.textContent = "Click Me!";
    }
  });

  function updateImage() {
    image.src = "./images/shoppingCart.png";
    image.alt = "Updated Shopping Cart";
    image.width = "200";
    image.height = "200";

    button.removeEventListener("click", updateImage);
  }

  button.addEventListener("click", updateImage, { once: true });
});