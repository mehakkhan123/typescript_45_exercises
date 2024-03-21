// store the names of animals in an array
var animals = ["Rabbit", "Cat", "Horse"];
// using for loop
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal, " would make a great pet"));
}
;
// Add the message outside the for loop
console.log("Any of these animals would make a great pet!");
