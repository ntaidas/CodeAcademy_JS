document
  .querySelector("div.formP > form")
  .addEventListener("submit", (eventoParametras) => {
    eventoParametras.preventDefault();
    console.log(eventoParametras);
    console.log(eventoParametras.target.elements);

    let text = eventoParametras.target.elements.inputText.value;
    let textArea = eventoParametras.target.elements.textareaText.value;
    let selectas = eventoParametras.target.elements.selectStuff.value;

    // let {inputText.value:text, textareaText:textArea, selectStuff:selectas} = eventoParametras.target.elements;
    // console.dir(text.value);
    // console.dir(textArea.value);
    // console.dir(selectas.value);

    console.dir(text);
    console.dir(textArea);
    console.dir(selectas);

    // document.querySelector('#formPvzResult').innerHTML =
    //   '<h1>'+text+'</h1>' +
    //   '<p>Komentaras: '+textArea+'</p>' +
    //   '<p>Reitingas: '+selectas+'</p>';
    // ;
    document.querySelector("#formPvzResult").innerHTML += `
      <h1 class='bigBlueText'>${text}</h1>
      <p>Komentaras: ${textArea}</p>
      <p>Reitingas: ${selectas == 0 ? "2" : selectas}</p>
    `;

    eventoParametras.target.reset(); // išvalo formos laukelius neperkraunant puslapio
  });

document.querySelector("#pvzKartu > form").addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target.elements);
  let sk1 = e.target.elements.nr1.valueAsNumber;
  let sk2 = e.target.elements.nr2.valueAsNumber;
  // console.log(sk1, typeof(sk1), sk2, typeof(sk2));
  let result = sk1 + sk2;
  document.querySelector("#pvzKartuResult").innerHTML += `
      ${sk1} + ${sk2} = ${result}
    `;
  e.target.reset();
});

//// Uzduotis 1e___________________________________________________________________

document.querySelector("#uzd1e > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let a = e.target.elements.a.valueAsNumber;
  let b = e.target.elements.b.valueAsNumber;
  let op = e.target.elements.op.value;
  let ats = 0;
  switch (op) {
    case "+":
      ats = a + b;
      break;
    case "-":
      ats = a - b;
      break;
    case "*":
      ats = a * b;
      break;
    case "/":
      ats = a / b;
      break;
    case "**":
      ats = a ** b;
      break;
    case "root":
      ats = a ** (1 / b);
      break;
    case "remainder":
      ats = a % b;
      break;
  }
  document.querySelector(
    "#uzd1e > .ats"
  ).innerHTML += `<p> ${a} ${op} ${b} = ${ats} </p>`;
});

//// Uzduotis 2) Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išveda ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60.

document.querySelector("#uzd2 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let amzius = e.target.elements.amzius.valueAsNumber;
  let 
  if (amzius >= 60) {
    ats = 6 / 3;
  } else if (amzius <= 16) {
    ats = 6 / 2;
  } else ats = 6;
  document.querySelector(
    "#uzd2 > .ats"
  ).innerHTML = `Jusu bilieto kaina yra ${ats} ${
    ats > 9 ? "pinigu" : "pinigai"
  }`;
});

//// Uzduotis 3) Kai kuriose šalyse reikia eiti į kariuomenę, jei tau tarp 18 ir 30 metų ir jei neturi kriminalinio įrašo. Sukurti programą, kuri su input + checkBox pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą checkBox input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

document.querySelector("#uzd3 > form").addEventListener("submit", (e) => {
  e.preventDefault();

  let amzius = e.target.elements.amzius.valueAsNumber;
  let teistas = e.target.elements.teistas.checked;
  let ats = true;
  console.log(teistas);
  if (amzius <= 18 || amzius >= 30 || teistas === true) {
    document.querySelector(
      "#uzd3 > .ats"
    ).textContent = `zjbs tau nereik i kariuomene`;
  } else {
    document.querySelector(
      "#uzd3 > .ats"
    ).textContent = `You're in the army now`;
  }
});

//// Uzduotis 4) Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu. Pvz: [16] => "Jūsų bonusas: 100 eurų".

document.querySelector("#uzd4 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let stazas = e.target.elements.age.valueAsNumber;
  console.dir(e.target);
  let ats;
  if (stazas >= 20) {
    ats = `Jusu bonusas 200 pinigu`;
  } else if (stazas >= 10) {
    ats = `Jusu bonusas 100 pinigu`;
  } else {
    ats = `Jusu bonusas 50 pinigu`;
  }
  document.querySelector("#uzd4 > .ats").textContent = ats;
});

//// Uzduotis 5) Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

document.querySelector("#uzd5 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let metai = e.target.elements.metai.valueAsNumber;
  let ats = "Nera kelemieji";
  if (metai % 4 === 0) {
    if (metai % 100 === 0) {
      if (metai % 400 === 0) {
        ats = "Kelemieji!!!";
      }
    } else {
      ats = "Kelemieji!!!";
    }
  }
  document.querySelector("#uzd5 > .ats").textContent = ats;
});

//// Uzduotis 6) Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

document.querySelector("#uzd6 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let ats = e.target.elements.temp.valueAsNumber * (9 / 5) + 32;
  document.querySelector("#uzd6 > .ats").textContent = ats;
});

//// Uzduotis 7) Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

document.querySelector("#uzd7 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let epastas = e.target.elements.pastas.value;
  let sutinku = e.target.elements.sutinku.checked;
  if (sutinku === true) {
    document.querySelector(
      "#uzd7 > .ats"
    ).textContent = `El. paštas ${epastas} sėkmingai užregistruotas`;
  } else {
    alert("Registracija nesėkminga.");
    document.querySelector("#uzd7 > .ats").textContent = `Bandykite dar karta`;
  }
});

//// Uzduotis 8) Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

document.querySelector("#uzd8 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let vardas = e.target.elements.vardas.value;
  let n = e.target.elements.kartai.valueAsNumber;
  let ul = document.querySelector("#uzd8 > ul");
  ul.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    ul.innerHTML += `<li>${vardas}</li>`;
  }
});

//// Uzduotis 9) Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).

document.querySelector("#uzd9 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let n = e.target.elements.kiekis.valueAsNumber;
  let ats = document.querySelector("#uzd9 > .ats");
  ats.innerHTML = "";
  let krastine = "";
  for (let i = 0; i < n; i++) {
    krastine += "*";
    ats.innerHTML += `<p>${krastine}</p>`;
  }
});

//// Uzduotis 10)***** Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):)
document
  .querySelector("#uzd10 > form > #vardass")
  .addEventListener("blur", (e) => {
    e.preventDefault();
    let ol = document.querySelector("#uzd10 > ol");
    let vardas = e.target.value;

    ol.innerHTML += `<li>${vardas},</li>`;
    ol.lastElementChild.textContent = `${vardas}.`;
    console.dir(ol);
  });

//// Uzduotis 11) Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.

 document.querySelector('#uzd11 > form').addEventListener('submit',(e)=>{
   e.preventDefault();
   let a = e.target.elements.a.valueAsNumber;
   let b = e.target.elements.b.valueAsNumber;
   let distA;
   let distB;
   let ats = document.querySelector("#uzd11 > .ats");
   if (a > 100){
    distA = a-100
   }else{
    distA = 100 - a
   }
   if (b > 100){
    distB = b-100
   }else{
    distB = 100 - b
   }
   if(distA===distB){
      ats.textContent = `Jie lygus`
   }else if(distA > distB){
    ats.textContent =`${b} yra arciau uz ${a}`
   }else{
    ats.textContent =`${a} yra arciau uz ${b}`
   }
   
 })

//// Uzduotis 12) Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).
function randomFive() {
  return Math.ceil(Math.random() * 5);
}
let randomSK = randomFive();
console.log(randomSK);
let counter = 1;

document.querySelector("#uzd12 > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let spejimas = e.target.elements.spek.valueAsNumber
  if(spejimas === randomSK){
    alert(`atspejai is ${counter} karto`)
  }else{
    alert('Nope!!!')
    counter++
  }
});

//// Uzduotis 13) Pakoreguokite 12'tą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.

// document.querySelector('#uzd13 > form').addEventListener('submit',(e)=>{
//   e.preventDefault();
// })
