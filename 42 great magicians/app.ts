// Define an array of magician names
let magiciansNames: string[] = [
  "Harry Potter",
  " Albus Dumbledore",
  "David Copperfield",
];
// pass an array to a function to show each magician's name
function showMagicians(magicians: string[]) {
  magicians.forEach(magician => console.log(magician));
}

// Function to modify magcian names by adding "the Great"
function makeGreat(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
//  call makeGreat function to modify the original magicianNames array
makeGreat(magiciansNames);
// call the showMagicians function to show the modified names
showMagicians(magiciansNames);
