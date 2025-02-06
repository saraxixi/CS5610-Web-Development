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