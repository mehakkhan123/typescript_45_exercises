var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (Number) {
    var suffix = "th";
    if (Number == 1) {
        suffix = "st";
    }
    else if (Number == 2) {
        suffix = "nd";
    }
    else if (Number == 3) {
        suffix == "rd";
    }
    {
        console.log("".concat(Number).concat(suffix));
    }
});
