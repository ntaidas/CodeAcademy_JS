let vardas = prompt("Koks tavo vardas?");
let galune1 = "ai";
let galune2 = "au";
let galune3 = "e";
//console.log(vardas);
if (vardas.endsWith("as") === true) {
  vardas = vardas.slice(0, -2);
  //console.log(vardas);
  vardas = vardas.concat(galune1);
  //console.log(vardas);
} else if (vardas.endsWith("us") === true) {
  vardas = vardas.slice(0, -2);
  //console.log(vardas);
  vardas = vardas.concat(galune2);
  //console.log(vardas);
} else if (vardas.endsWith("ė") === true) {
  vardas = vardas.slice(0, -1);
 // console.log(vardas);
  vardas = vardas.concat(galune3);
//   console.log(vardas);
}else if(vardas.endsWith('a')=== false) {
  alert("Kas tu toks isvis?Eik is cia!");
}
alert(`Labas ${vardas}!`)