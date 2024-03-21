var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Turkey", "Switzerland", "Canada", "Naran", "Australia"];
// Original Order
console.log("Original Order:", places);
// Alphabetical Order without modifying the list
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
// Array is still in its Original Order
console.log("Original Order:", places);
// Reverse Alphabetical Order without modifying the list
console.log("Reversed Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
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
