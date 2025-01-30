// let user;
// do {
//   user = prompt('What is your name?');
// } while (isNaN(user) === false || user.length === 1);

let students = [
  {
    name: "Cristian",
    age: 30,
    location: "Vancouver"
   },
   {
    name: "James",
    age: 40,
    location: "Toronto"
   },
   {
    name: "Garry",
    age: 20,
    location: "Vancouver"
   }
  ];

function findStudentInVancouver() {
  let vancouverStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].location === "Vancouver") {
      // console.log student name lives  in the city
      console.log(`${students[i].name} lives in ${students[i].location}`);
      vancouverStudents.push(students[i]);
    }
  }
  return vancouverStudents;
}

const returnedArray = findStudentInVancouver();
console.log(returnedArray);

function displayOrderSummary()
{
  console.log('Order Summary');
}

function placeOrder(flavor, size, toppings) {
  // do the math and calculate final price
  let order = {flavor:..., size:..., toppings:..., finalPrice:...}
  displayOrderSummary(order)
}