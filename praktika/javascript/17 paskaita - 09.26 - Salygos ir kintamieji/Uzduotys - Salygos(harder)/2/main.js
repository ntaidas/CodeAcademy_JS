alert('Nu labas...')

function didzioji(miestas){
    let didzioji = (miestas.slice(0,1)).toUpperCase();
    let mazosios = miestas.slice(1);
    didzioji = didzioji.concat(mazosios);
    return didzioji
}

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
let miestas = prompt("O koks tavo miestas, ka?");
miestas = miestas.toLowerCase();
if (
  miestas === "vilnius" ||
  miestas === "kaunas" ||
  miestas === "klaipeda" ||
  miestas === "marijampole"
) {
    alert(`Labas ${vardas}, ${didzioji(miestas)} yra miestas apie kuri nieko grazaus deja negaliu pasakyti...`)
}else{
    alert(`${vardas}, as klausiau is kokio tu miesto... ${didzioji(miestas)} visai ne miestas`)
}



let pasisveikinimas = 5;
if(pasisveikinimas >=  0 || pasisveikinimas <= 0){
  console.log('neteisinga')
}else{
  console.log(pasisveikinimas)
}