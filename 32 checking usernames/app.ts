// list of current users
let currentUsers: string[] = ["Mehak", "Ghazal", "Aliza", "Laiba", "Samra"];
// list of new users
let newUsers: string[] = ["Bushra", "Anum", "Mehak", "Rida", "Ghazal"];
// loop through the newUsers to see if each new username has already been used
newUsers.forEach((newUser) => {
  if (
    currentUsers.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log("You will need to enter a new username");
  } else {
    console.log(`The username ${newUser} is available.`);
  }
});
