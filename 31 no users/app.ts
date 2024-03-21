// Define an Array
let userNames:string[] = ["Mehak", "Admin", "Ghazal", "Samra", "Bushra"];
// Empty  Array
userNames=[];
// print the Message
if(userNames.length===0){console.log("We need to find some users.")}
else(userNames.forEach(userName=>{if(userName==="Admin")
{console.log(`Hello ${userName}, Would you like to see a status report?`)}
else{console.log(`Hello ${userName}, Thankyou for logging in again.`)}}));