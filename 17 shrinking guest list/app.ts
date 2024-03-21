// guest list
let guestList: string[] = ["Ifrah", "Samra", "Bushra", "Nida"];
console.log(guestList);
console.log("Great News! I found a bigger dinner table");
// add one new guest to the beginning of an array
guestList.unshift("Rida");
// add one new guest to the end of an array
guestList.push("Ayesha");
// add one new guest to the middle of an array
guestList.splice(guestList.length / 2, 0, "Anum");
// print a new set of invitation
guestList.forEach((guest) =>
  console.log(`Hey ${guest}, Would you like to join me for dinner?`)
);


// I can invite only two people for dinner
console.log(
  "My new dinner table won't arrive in time for dinner, so I can invite only two people for dinner"
);
// remove guests from the list until only two names remain
while (guestList.length > 2) {
  let removedGuestList = guestList.pop();
  console.log(`Sorry ${removedGuestList}, I can't invite you to dinner.`);
}
// sending invitation to the remaining two guests
console.log("Invitation to the remaining two guests");
guestList.forEach((remainingGuests) =>
  console.log(`Hey ${remainingGuests}, You are still invited to dinner.`)
);
// Remove the last two names and get an empty list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
