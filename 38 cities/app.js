// Create a function with the parameters city(required) and country(default value)
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
;
// Call the function
describeCity("Karachi"); //city(Karachi) and country(default value)
describeCity("Lahore"); //city(Lahore) and country(default value)
describeCity("Istanbul", "Turkey"); //city(Istanbul) and country(Turkey)
