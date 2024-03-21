// create a guest list
let guestList = ["Ifrah", "Samra", "Bushra", "Nida"];
// one of the guests is not coming
let notComing = guestList[2];
console.log(notComing, "can't come.");
// replace the name with the new guest name
guestList.splice(2, 1, "Rida");
// print a new set of invitation
guestList.forEach((guest) =>
  console.log(`Hey ${guest}, Would you like to join me for dinner?`)
);
