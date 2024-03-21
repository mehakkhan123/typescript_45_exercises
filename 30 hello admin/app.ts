// list of usernames including admin
let userNames: string[] = ["Mehak", "Admin", "Ghazal", "Samra", "Bushra"];
userNames.forEach((userName) => {
  if (userName === "Admin") {//print special greeting to admin
    console.log("Hello admin, would you like to see a status report?");
  } else {//print generic greeting
    console.log(`Hello ${userName}, Thankyou for logging in again.`);
  }
});
