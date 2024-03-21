// function with required and optional parameter
function car(
  manufacturer: string,
  model: string,
  ...other: { [key: string]: any }[]
): object {
  let carInfo = { manufacturer, model, ...Object.assign({}, ...other) };
  return carInfo;
}

// print object
console.log(car("toyota", "corolla", { color: "black" }));
console.log(car("Honda", "civic", { color: "grey" }));