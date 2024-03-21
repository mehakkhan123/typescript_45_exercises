var userNames = ["Mehak", "Admin", "Ghazal", "Samra", "Bushra"];
userNames.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", Thankyou for logging in again."));
    }
});
