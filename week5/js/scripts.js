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