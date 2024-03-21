// Tests for equality and inequality with strings
console.log("Testing equality with strings");
console.log("car is equal to car");
console.log("car" == "car"); //equality
console.log("Car is not equal to Car");
console.log("Car" != "Car"); //inequality
// Tests using the lower case function
console.log("Testing with lower case function");
console.log("car is equal to car");
console.log("Car".toLowerCase() == "car"); //equality
console.log("Car is not equal to car after converting it into lower case");
console.log("Car".toLowerCase() != "car"); //inequality
// Numerical tests 
console.log("Numerical Tests");
console.log("5 is equal to 5");
console.log(5 == 5); //equality
console.log("8 is not equal to 8");
console.log(8 != 8); //inequality
console.log("10 is greater than 5");
console.log(10 > 5); //greater than
console.log("10 is less than 5");
console.log(10 < 5); //less than
console.log("20 is greater than or equal to 15");
console.log(20 >= 15); //greater than or equal to
console.log("30 is less than 0r equal to 10");
console.log(30 <= 10); //less than or equal to
// Tests using "and" operator
console.log("Tests with 'and' and 'or':");
console.log("2 is equal to 2 and 5 is equal to 5");
console.log(2 == 2 && 5 == 5);
console.log("3 is less than 1 and 4 is greater than 5");
console.log(3 < 1 && 4 > 5);
// Tests using "or" operator
console.log("2 is greater than 3 or 5 is equal to 5");
console.log(2 > 3 || 5 == 5);
console.log("2>3 is greater than 3 or 4 is greater than 5");
console.log(3 < 1 || 4 > 5);
// Test whether an item is in an array
var fruits = ["Apple", "Mango", "Banana"];
console.log("Apple is included in my fruit's array.");
console.log(fruits.includes("Apple"));
// Test whether an item is not in an array
var vegetables = ["Potato", "Turnip", "Onion"];
console.log("Potato is not included in my vegetable's array.");
console.log(!vegetables.includes("Potato"));
