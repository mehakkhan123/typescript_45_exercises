// Create a function with the default parameters 
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Make a \"".concat(size, "\" size t-shirt with the message \"").concat(message, "\" printed on the it."));
}
;
// Call the function
makeShirt(); //default size and message
makeShirt("Medium"); //Medium size and default message
makeShirt("Small", "Code like a boss!"); //Customized size and message
