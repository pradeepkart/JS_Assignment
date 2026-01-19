//task 1

let a = 20;
let b = 6;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Remainder:", a % b);

//task 2

let num = 10;

num += 5;   // 15
num -= 3;   // 12
num *= 2;   // 24
num /= 4;   // 6

console.log("Final Value:", num);

//task 3

let x = 10;
let y = "10";

console.log("Equal (==):", x == y);      // true
console.log("Strict Equal (===):", x === y); // false
console.log("x > y:", x > y);            // false
console.log("x <= y:", x <= y);          // true

//task 4

let p = true;
let q = false;

console.log("Both true:", p && q);   // false
console.log("At least one true:", p || q); // true
console.log("Reverse p:", !p);       // false

//task 5

let n = 7;

let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(result);

//task 6

let salary = 20000;

salary += salary * 0.20;

salary += salary * 0.10;

salary -= salary * 0.08;

console.log("Net Salary:", salary);

//task 7

let marks = 82;

if (marks >= 0 && marks <= 100) {
  if (marks >= 90 && marks <= 100) {
    console.log("A");
  } else if (marks >= 75 && marks <= 89) {
    console.log("B");
  } else if (marks >= 50 && marks <= 74) {
    console.log("C");
  } else {
    console.log("Fail");
  }
} else {
  console.log("Invalid Marks");
}

//task 8

let storedUser = "admin";
let storedPass = "1234";

let inputUser = "admin";
let inputPass = "1234";

if (inputUser === storedUser && inputPass === storedPass) {
  console.log("Login Successful");
} else {
  console.log("Invalid Login");
}

// task 9

let units = 180;
let bill = 0;

if (units <= 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = (100 * 5) + ((units - 100) * 7);
} else {
  bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Electricity Bill: ₹", bill);

//task 10

let amount = 6000;
let isPremium = true;

let message = (amount > 5000 && isPremium) 
  ? "Discount Applied" 
  : "No Discount";

console.log(message);
