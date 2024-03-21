var guestList = ["Ifrah", "Samra", "Bushra", "Nida"];
console.log(guestList);
console.log("Great News! I found a bigger dinner table");
guestList.unshift("Rida");
guestList.push("Ayesha");
guestList.splice(guestList.length / 2, 0, "Anum");
guestList.forEach(function (guest) { return console.log("Hey ".concat(guest, ", Would you like to join me for dinner?")); });
