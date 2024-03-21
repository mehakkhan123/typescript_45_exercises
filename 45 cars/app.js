"use strict";
function car(manufacturer, model, ...other) {
    let carInfo = Object.assign({ manufacturer, model }, Object.assign({}, ...other));
    return carInfo;
    ;
}
console.log(car("toyota", "corolla", { color: "black" }));
console.log(car("Honda", "civic", { color: "grey" }));
