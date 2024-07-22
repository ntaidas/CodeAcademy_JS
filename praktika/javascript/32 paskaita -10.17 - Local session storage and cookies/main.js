import GymCard from "./modules/gymCard.js";


// Cookies
console.groupCollapsed("cookies");
// susikurti cookie:
document.cookie = `name=value`;
document.cookie = `pavadinimas=reiksme`;
document.cookie = `vardas=Rokas`;
document.cookie = `pavarde=Banaitis`;
document.cookie = `masyvas=[1,5,6,8,'labas','ate']`;
document.cookie = `objektas{raktas:'reiskme',kitasRaktas:'kitaPieva'}`;
document.cookie = `expire='after'; expires=${new Date(
  "Tue, 17 Oct 2023 8w:42 GMT"
)}`;

//pasiimti cookie:
const cookiesObj = {};
const cookies = document.cookie.split(" ").forEach((cookie) => {
  console.log(cookie);
  const cookieElements = cookie.split("=");

  cookiesObj[cookieElements[0]] = cookieElements[1];
});
console.log(cookies);
console.log(cookiesObj);

console.groupEnd();

//// Session/Local Storage
console.groupCollapsed("Session/Local Storage");
let vardas = "Rokas";
let pavarde = "banaitis";
let asmuo = {
  vardas: "Rokas",
  pavarde: "banaitis",
  amzius: 27,
};
console.log("____________");
// localStorage.setItem('asmuo',asmuo) no BUENO
localStorage.setItem("asmuo", JSON.stringify(asmuo));
console.log(localStorage.getItem("asmuo")); /// NO BUENO
console.log(JSON.parse(localStorage.getItem("asmuo")));
console.log("____________");
//sessionStorage.
localStorage.setItem("vardas", "Rokas");
localStorage.setItem("pavarde", "Banaitis");
localStorage.setItem("amzius", 27);
const metai = localStorage.getItem("amzius");
console.log(metai, typeof metai);

// localStorage.removeItem('pavarde');

// localStorage.clear();
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.key(i));
  const localStorageName = localStorage.key(i);
  const localStorageValue = localStorage.getItem(localStorageName);
}

console.groupEnd();

// const duomenys = {
//   asmenys: [
//     {
//       vardas: "Aidas",
//       pavarde: "Dovydenas",
//       amzius: 32,
//     },
//     {
//       vardas: "Petras",
//       pavarde: "Petraitis",
//       amzius: 45,
//     },
//     {
//       vardas: "Jonas",
//       pavarde: "Jonaitis",
//       amzius: 65,
//     },
//   ],
//   masinos: [
//     {
//       marke: "Audi",
//       modelis: "TT",
//       metai: 2007,
//     },
//     {
//       marke: "Nissan",
//       modelis: "GT-R",
//       metai: 2020,
//     },
//     {
//       marke: "Toyota",
//       modelis: "Trueno AE86",
//       metai: 1986,
//     },
//     {
//       marke: "Toyota",
//       modelis: "Trueno AE86",
//       metai: 1986,
//     },
//     {
//       marke: "Subaru",
//       modelis: "Impreza",
//       metai: 1997,
//     },
//   ],
//   kazkoksMetodas(){
//     console.log('... magic ...')
//   }
// };

// console.log(duomenys)
// localStorage.setItem('duomenys', JSON.stringify(duomenys))
// localStorage.setItem('asmenys', JSON.stringify(duomenys.asmenys))
// localStorage.setItem('masinos', JSON.stringify(duomenys.masinos))

const asmenys = JSON.parse(localStorage.getItem("asmenys"));
console.log(asmenys);

const naujiAsmenys = [asmenys[0], asmenys[1], asmenys[2], asmenys[3]];

const darVienasAsmuo = {
  vardas: "Alfonas",
  pavarde: "Alfonsavicius",
  amzius: 100,
};

// localStorage.setItem('asmenys', JSON.stringify(darVienasAsmuo)) blogai nes peraso buvusius duomenis
// asmenys.push(darVienasAsmuo);
// console.log(asmenys);
// console.log(naujiAsmenys)
// localStorage.setItem('asmenys',JSON.stringify(asmenys));
// localStorage.setItem('asmenys',JSON.stringify(naujiAsmenys));

document.querySelector("#salesForma").addEventListener("submit", (e) => {
  e.preventDefault();
  const formosReiksmes = {
    id: Date.now(),
    vardas: e.target.elements.name.value,
    lokacija: e.target.elements.location.value,
    kaina: e.target.elements.price.valueAsNumber,
    foto: e.target.elements.foto.value
  };
  console.log(formosReiksmes);
  const gymCardDiv = new GymCard(formosReiksmes);
  console.log(gymCardDiv)
  const cards = JSON.parse(localStorage.getItem('cards'))?JSON.parse(localStorage.getItem('cards')):[];
  cards.push(formosReiksmes)

  document.querySelector('#allGyms').append(gymCardDiv)
  localStorage.setItem('card',JSON.stringify(cards))
});

if(localStorage.getItem('cards')){
    const cards = JSON.parse(localStorage.getItem('cards'))
    cards.forEach(card =>{
        const cardD = new GymCard(card)
    })
}

