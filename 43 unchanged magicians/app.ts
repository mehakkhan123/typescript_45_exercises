// Define an array of magician names
let magiciansNames: string[] = [
  "Harry Potter",
  "Albus Dumbledore",
  "David Copperfield",
];
// return copy of an array
function magicianNamesCopy(arr: string[]) {
  return [...arr];
}

// pass an array to a function to show each magician's name
function showMagicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(magician));
}

// Function to modify magcian names by adding "the Great"
function makeGreat(magicians: string[]) {
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