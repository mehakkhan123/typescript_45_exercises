var guestList = ["Ifrah", "Samra", "Bushra", "Nida"];
console.log(guestList);
console.log("Great News! I found a bigger dinner table");
guestList.unshift("Rida");
guestList.push("Ayesha");
guestList.splice(guestList.length / 2, 0, "Anum");
guestList.forEach(function (guest) { return console.log("Hey ".concat(guest, ", Would you like to join me for dinner?")); });
// I can invite only two people for dinner
console.log("My new dinner table won't arrive in time for dinner, so I can invite only two people for dinner");
// remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuestList = guestList.pop();
    console.log("Sorry ".concat(removedGuestList, ", I can't invite you to dinner."));
}
;
// sending invitation to the remaining two guests
console.log("Invitation to the remaining two guests");
guestList.forEach(function (remainingGuests) { return console.log("Hey ".concat(remainingGuests, ", You are still invited to dinner.")); });
// Remove the last two names and get an empty list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
