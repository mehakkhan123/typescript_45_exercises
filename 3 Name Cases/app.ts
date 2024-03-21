// Store a person's name in a variable
let personName:string = "Mehak Khan";
// print the name
console.log(personName.toLowerCase()); //lowercase
console.log(personName.toUpperCase()); //uppercase
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase())); //titlecase