// Define an Array
var userNames = ["Mehak", "Admin", "Ghazal", "Samra", "Bushra"];
// Empty  Array
userNames = [];
// print the Message
if (userNames.length === 0) {
    console.log("We need to find some users.");
}
else
    (userNames.forEach(function (userName) {
        if (userName === "Admin") {
            console.log("Hello ".concat(userName, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userName, ", Thankyou for logging in again."));
        }
    }));
