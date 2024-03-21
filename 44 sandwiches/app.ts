// create a function with parameter
function sandwich(...items: string[]) {
  console.log(`Make a sandwich with: ${items}`);
}
// call the function three times using a different number of arguments
sandwich("Cheese", "Chicken");
sandwich("Lettuce", "Tomato", "Cucumber");
sandwich("Mayo");