import { data as carsData } from "./modules/carsData.js";
import {
  sum as sudetis,
  substraction as atimtis,
  randomColor,
} from "./modules/helperFunctions.js";
import Masina from "./modules/Car.js";

console.log(carsData);
console.log(sudetis(2, 2));
console.log(randomColor());
const objByClass = [];
carsData.forEach((car) => {
//   const carObj = new Masina(car);
//   console.log(carObj);
//   objByClass.push(carObj);
//   //  console.log(carObj.make);
//   console.log(carObj.getMake());
//   // console.log(carObj.make = 'naujaMarke0');
//   console.log(carObj.setMake("naujaMarke1"));
const carDiv = new Masina(car);
document.querySelector('#carCards').appendChild(carDiv)
});
console.log(objByClass);
