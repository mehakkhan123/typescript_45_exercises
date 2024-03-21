// create a guest list
let guestList: string[] = ["Ifrah", "Samra", "Bushra", "Nida"];
console.log(guestList);
console.log("Great News! I found a bigger dinner table");
// Add one new guest to the beginning of an array
guestList.unshift("Rida");
// Add one new guest to the end of an array 
guestList.push("Ayesha");
// Add one new guest to the middle of an array
guestList.splice(guestList.length / 2, 0, "Anum");
// print a new set of invitation
guestList.forEach((guest) =>
  console.log(`Hey ${guest}, Would you like to join me for dinner?`)
);
