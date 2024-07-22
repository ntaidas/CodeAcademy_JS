//1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
console.group("1");
const cars = ["BMW", "VW", "Audi"];
cars.forEach((car) => console.log(car));
console.groupEnd();
//2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
console.group("2");
cars.forEach((car, i) => console.log(i + ":" + car));
console.groupEnd();
//3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
console.group("3");
let draugai = ["ginTAriJA", "otTas", "mArIuS", "martYNas"];
let tikriDraugai = draugai.map((vardas) =>
  vardas.slice(0,1).toUpperCase().concat(vardas.slice(1).toLowerCase())
);
console.log(tikriDraugai);
console.groupEnd();
//4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs jūsų amžiui.
console.group("4");
let drauguAmziai = [26, 32, 51, 36, 35, 31, 31, 24];
let vyresni = drauguAmziai.filter((age) => age > 32);
console.log(vyresni)
console.groupEnd();
//5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas", "Klaipėda", ...). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
console.group("5");
let miestai = ["Vilnius", "Kaunas", "Klaipėda"]
let uzd5 = miestai.find((el)=> el.startsWith('K')===true)
console.log(uzd5)
console.groupEnd();
//6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
console.group("6");
let uzd6 = miestai.some((el)=> el.charAt(0)=== el.charAt(0).toLowerCase())
console.log(uzd6)
console.groupEnd();
//7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.
console.group("7");
let uzd7 = miestai.every((el)=> el.charAt(0)=== el.charAt(0).toUpperCase())
console.log(uzd7)
console.groupEnd();
