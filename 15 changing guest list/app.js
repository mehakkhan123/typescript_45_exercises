var guestList = ["Ifrah", "Samra", "Bushra", "Nida"];
var notComing = guestList[2];
console.log(notComing, "can't come.");
guestList.splice(2, 1, "Rida");
guestList.forEach(function (guest) { return console.log("Hey ".concat(guest, ", Would you like to join me for dinner?")); });
