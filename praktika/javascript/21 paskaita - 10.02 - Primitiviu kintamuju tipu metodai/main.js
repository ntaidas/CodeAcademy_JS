// 1)
console.groupCollapsed("1");
let vardas = "Gintarija";
console.groupEnd();
// 2)
console.groupCollapsed("2");
let skaicius = 26;
console.groupEnd();
// 3)
console.groupCollapsed("3");
let tekstas = [
  "Labas",
  "vakaras",
  "tikiuosi",
  "jus",
  "visi",
  "gerai",
  "laikotes",
  "as",
  "tai",
  "pavyzdziui",
  "labai",
  "megstu",
  "vyna",
  "o",
  "jus",
  "?",
];
console.groupEnd();
// 4)
console.groupCollapsed("4");
let skaiciai = [
  1, 5, 6, 8, 4, 654, 8, 6, 6, 1, 65, 9, 8, 64, 16, 49, 4, 9, 46, 548, 6, 144,
  36, 41,
];
console.log(skaiciai[1]);
console.groupEnd();
// 5)
console.groupCollapsed("5");
let viskas = [
  "Labas",
  "as",
  "krabas",
  88,
  "man",
  20,
  "metu",
  "ir",
  "as",
  69,
  4,
];
console.groupEnd();
// 6)
console.groupCollapsed("6");
console.log(vardas.charAt(0));
console.groupEnd();
// 7)
console.groupCollapsed("7");
console.log(vardas.charAt(vardas.length - 1));
console.groupEnd();
// 8)
console.groupCollapsed("8");
function midLetter(zodis) {
  let middleIndex;
  if (zodis.length % 2 === 0) {
    middleIndex = zodis.length / 2;
    return zodis.charAt(middleIndex);
  } else {
    middleIndex = Math.ceil(zodis.length / 2);
    return zodis.charAt(middleIndex);
  }
}
console.log(midLetter(vardas));
console.groupEnd();
// 9)
console.groupCollapsed("9");
function raide(zodis, n) {
  return zodis.charAt(n - 1);
}
console.log(raide(vardas, 2));
console.groupEnd();
// 10),11)
console.groupCollapsed("10,11");
if (skaicius % 2 === 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}
console.groupEnd();
// 12)
console.groupCollapsed("12");
if (skaicius === Math.floor(skaicius) && skaicius === Math.ceil(skaicius)) {
  console.log("Sveikas");
} else {
  console.log("Nesveikas");
}
console.groupEnd();
// 13)
console.groupCollapsed("13");
function uzd13(numeris) {
  if (numeris % 2 === 0) {
    console.log("lyginis");
  } else {
    console.log("nelyginis");
  }
}
uzd13(9);
console.groupEnd();
// 14
console.groupCollapsed("14");
for (let zodis of tekstas) {
  if (zodis.length > 5) {
    console.log(zodis);
  }
}
console.groupEnd();
// 15)
console.groupCollapsed("15");
for (let zodis of tekstas) {
  if (zodis.length < 8) {
    console.log(zodis);
  }
}
console.groupEnd();
// 16)
console.groupCollapsed("16");
for (let zodis of tekstas) {
  console.log(zodis.charAt(0));
}
console.groupEnd();
// 17)
console.groupCollapsed("17");
for (let zodis of tekstas) {
  console.log(zodis.charAt(zodis.length - 1));
}
console.groupEnd();
// 18)
console.groupCollapsed("18");
function uzd18(masyvas, a, b) {
  for (let zodis of masyvas) {
    if (zodis.length > a && zodis.length < b) {
      console.log(zodis);
    }
  }
}
uzd18(tekstas, 1, 5);
console.groupEnd();
// 19)
console.groupCollapsed("19");
let uzd19 = 0;
for (let narys of skaiciai) {
  uzd19 += narys;
}
console.log(uzd19);
console.groupEnd();
// 20)
console.groupCollapsed("20");
for (let i = 0; skaiciai.length > i; i += 4) {
  console.log(skaiciai[i]);
}
console.groupEnd();
// 21)
console.groupCollapsed("21");
function uzd21(masyvas, n) {
  let suma = 0;
  for (let i = 0; masyvas.length > i; i += n) {
    suma += masyvas[i];
  }
  return suma;
}
console.log(uzd21(skaiciai, 2));
console.groupEnd();
// 22)
console.groupCollapsed("22");
function uzd22(masyvas, n, lyginis) {
  let suma = 0;
  if (lyginis === true) {
    for (let i = 0; masyvas.length > i; i += n) {
      if (masyvas[i] % 2 === 0) {
        suma += masyvas[i];
      }
    }
  } else {
    for (let i = 0; masyvas.length > i; i += n) {
      if (masyvas[i] % 2 !== 0) {
        suma += masyvas[i];
      }
    }
  }
  return suma;
}
console.log(uzd22(skaiciai, 2, false));
console.groupEnd();
// 23)
console.groupCollapsed("23");
let uzd23skaiciai = [];
let uzd23zodziai = [];
viskas.forEach((narys) => {
  if (typeof(narys) === 'string') {
    uzd23zodziai.push(narys);
  } else {
    uzd23skaiciai.push(narys);
  }
});

console.log(uzd23skaiciai);
console.log(uzd23zodziai);
console.groupEnd();
