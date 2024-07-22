// ___________________________________S1
let legalAge = 20;
let clientAge = 32;
if (clientAge >= legalAge) {
  alert("Klientas pakankamai senas");
} else {
  alert("Eik atgal i mokykla");
}
// ___________________________________S2
let myName = "Aidas";
if (myName.length > 6) {
  console.log("Ilgas vardas");
}
// ___________________________________S3
let myAge = 32;
if (myAge > 100 || myAge < 0) {
  console.log("invalid age");
} else if (myAge > 18) {
  console.log("adult");
} else {
  console.log("baby");
}
// ___________________________________S4
let car = "Audi";
let VWgroup = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"];
let BMWgroup = ["BMW", "Mini", "Rolls-Royce"];
let message
for (let i = 0; i < VWgroup.length; i++) {
  if (car === VWgroup[i]) {
    message = 'Priklauso VW grupei';
  }
}
for (let i = 0; i < BMWgroup.length; i++) {
  if (car === BMWgroup[i]) {
    message = 'Priklauso BMW grupei';
  }
}
console.log(car,'priklauso',message);
if(message == undefined){
  console.log('melagis')
}

