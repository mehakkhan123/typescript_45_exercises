
let places:string[] = ["Turkey", "Switzerland", "Canada", "Naran", "Australia"];
// Original Order
console.log("Original Order:", places);
// Alphabetical Order without modifying the list
console.log("Alphabetical Order:", [...places].sort());
// Array is still in its Original Order
console.log("Original Order:", places);
// Reverse Alphabetical Order without modifying the list
console.log("Reversed Alphabetical Order:", [...places].sort().reverse());
// Array is still in its Original Order
console.log("Original Order:", places);
// Reverse the Order
console.log("Reversed Order:", places.reverse());
// Reverse the Order again
console.log("Original Order;", places.reverse());
// Alphabetical Order
console.log("Alphabetical Order:", places.sort());
// Reverse Alphabetical Order
console.log("Reversed Alphabetical Order:", places.reverse());

