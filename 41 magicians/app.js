"use strict";
// Define an array of magician names
let magiciansNames = ["Harry Potter", "Dumbledore", "David Copperfield"];
// pass an array to a function to show each magician's name
function showMagicians(magicians) { magicians.forEach(magician => console.log(magician)); }
;
// call the function with the magicianNames array
showMagicians(magiciansNames);
