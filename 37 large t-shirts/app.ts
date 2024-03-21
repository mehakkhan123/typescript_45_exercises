// Create a function called makeShirt with the default parameters 
function makeShirt(size:string = "Large", message:string = "I love TypeScript")
// Print a sentence summarizing the size of the shirt and the message printed on it
{console.log(`Make a "${size}" size t-shirt with the message "${message}" printed on the it.`);};
// Call the function
makeShirt(); //default size and message
makeShirt("Medium"); //Medium size and default message
makeShirt("Small", "Code like a boss!"); //Customized size and message