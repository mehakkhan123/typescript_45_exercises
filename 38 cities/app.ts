// Create a function with the parameters city(required) and country(default value)
function describeCity(city:string, country:string = "Pakistan")
// Following message should be printed
{console.log(`${city} is in ${country}.`)};
// Call the function
describeCity("Karachi"); //city(Karachi) and country(default value)
describeCity("Lahore"); //city(Lahore) and country(default value)
describeCity("Istanbul", "Turkey"); //city(Istanbul) and country(Turkey)