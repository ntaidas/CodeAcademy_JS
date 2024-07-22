console.groupCollapsed("Uzduotis 1");
let oneOne = [
  "vardas",
  88,
  ["a", "b", "c"],
  false,
  { filmas: "BTTF" },
  "labas",
];
console.log("1.1", oneOne);
console.log("ilgis", oneOne.length);
let oneTwo = {
  ginklas: "katana",
  dangus: "melynas",
  makaronai: "ramen",
  skaicius: 25,
  kunoDalys: ["rankos", "kojos", "kita"],
  kunoDalysKiekis: {
    rankos: 3,
    kojos: 1,
  },
};
console.log(`1.2`, oneTwo);
let oneThree = ["a", "b", "c", [1, 2, 3, 4]];
console.log("1.3", oneThree);
let oneFour = [
  {
    vardas: "Romas",
    dirba: false,
    amzius: 35,
    gyvenamojiVieta: "uz devyniu mariu",
  },
  {
    vardas: "Pranas",
    dirba: true,
    amzius: 66,
    gyvenamojiVieta: "Smilga",
  },
  1,
  false,
];
console.log("1.4", oneFour);
let oneFive = {
  objectas: true,
  dydis: 4,
  pavadinimas: "One.Five",
  masyvas: [1, 2, 3, 4],
};
console.log("1.5", oneFive);
let oneSix = {
  objectas: true,
  dydis: 4,
  pavadinimas: "One.Six",
  kitasObjektas: {
    viduje: true,
    paskutinis: true,
    dydis: 4,
    masina: "Nissan",
  },
};
console.log("1.6", oneSix);
console.groupEnd();
console.groupCollapsed("Uzduotis 2");
console.log("2.1", oneOne[1], oneOne[2], oneTwo.ginklas, oneTwo.dangus);
console.log(
  "2.2.1",
  oneThree[1],
  oneThree[2],
  oneThree[3][3],
  "2.2.2",
  oneFour[0].dirba,
  oneFour[1].gyvenamojiVieta,
  oneFour[3],
  "2.2.3",
  oneFive.masyvas[1],
  oneFive.dydis,
  oneFive.pavadinimas,
  "2.2.4",
  oneSix.objectas,
  oneSix.pavadinimas,
  oneSix.kitasObjektas.masina
);
console.groupEnd();
