"use strict";
// Define an array of magician names
let magiciansNames = [
    "Harry Potter",
    "Albus Dumbledore",
    "David Copperfield",
];
// return copy of an array
function magicianNamesCopy(arr) {
    return [...arr];
}
// pass an array to a function to show each magician's name
function showMagicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
// Function to modify magcian names by adding "the Great"
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
//   store copy of array
let copyMagicianArray = magicianNamesCopy(magiciansNames);
makeGreat(copyMagicianArray);
// original array
showMagicians(magiciansNames);
// modified copy of an array
showMagicians(copyMagicianArray);
