// interface for a car object
interface car {
  Brand: string;
  Model: String;
  Year: number;
  Color: string;
  Price: Number;
  isElectric: boolean;
}
// create an object for car
let car = {
  Brand: "Tesla",
  Model: "Model S",
  Year: 2002,
  Color: "Midnight Silver Metallic",
  Price: 7999000,
  isElectric: true,
};
// print object
console.log(car);
