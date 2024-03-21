var currentUsers = ["Mehak", "Ghazal", "Aliza", "Laiba", "Samra"];
var newUsers = ["Bushra", "Anum", "Mehak", "Rida", "Ghazal"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("You will need to enter a new username");
    }
    else {
        console.log("The username ".concat(newUser, " is available."));
    }
});
