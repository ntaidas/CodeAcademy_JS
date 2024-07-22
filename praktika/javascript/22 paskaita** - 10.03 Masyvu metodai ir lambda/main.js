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
// 1)
console.groupCollapsed("1");
function uzd1(masyvas) {
  return masyvas.join(" ");
}
console.log(uzd1(tekstas));
console.groupEnd();
console.groupCollapsed("2");

function uzd2(skaicius) {
  let naujas = skaicius.toString();
  let sekantis = "";
  for (let i = 0; i < naujas.length; i++) {
    if (parseInt(naujas[i]) % 2 === 0 && parseInt(naujas[i + 1]) % 2 === 0) {
      sekantis += naujas[i] + "-";
    } else {
      sekantis += naujas[i];
    }
  }
  return sekantis;
}
console.log(uzd2(32613544888));
console.groupEnd();
console.groupCollapsed("3");
function uzd3(masyvas) {
  let uzd3R = [];
  for (let i = masyvas.length - 1; i >= 0; i--) {
    uzd3R.push(masyvas[i]);
  }
  return uzd3R;
}
console.log(uzd3(tekstas));
console.groupEnd();
console.groupCollapsed("4");
let uzd4M = [1, 4, 5, 6, 4, 8, 4, 5];
let uzd4M2 = [4, 5];
function uzd4(masyvas, masyvas2) {
  let atsakymas = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (!masyvas2.includes(masyvas[i])) {
      atsakymas.push(masyvas[i]);
    }
  }
  return atsakymas;
}
console.log(uzd4(uzd4M, uzd4M2));
console.groupEnd();
console.groupCollapsed("5");
function uzd5(masyvas) {
  let min = masyvas[0];
  let max = masyvas[0];
  for (let i = 1; i < masyvas.length; i++) {
    masyvas[i] < min
      ? (min = masyvas[i])
      : masyvas[i] > max
      ? (max = masyvas[i])
      : console.log("in progress");
  }
  return [min, max];
}
console.log(uzd5(uzd4M));
console.groupEnd();
console.groupCollapsed("6");
function uzd6(masyvas, masyvas2) {
  let atsakymas = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas2.includes(masyvas[i])) {
      atsakymas.push(masyvas[i]);
    }
  }
  return atsakymas;
}
console.log(uzd6(uzd4M, uzd4M2));
console.groupEnd();
console.groupCollapsed("7");
let reiksmes = ["a", "b", "c", "d", "e", "f", "g", "h"];
let indeksai = [0, 3, 5, 7];
function uzd7(masyvas, masyvas2) {
  let atsakymas = [];
  for (let i = 0; i < masyvas.length; i++) {
    atsakymas.push(masyvas2[masyvas[i]]);
  }
  return atsakymas;
}
console.log(uzd7(indeksai, reiksmes));
console.groupEnd();
console.group("8**");
function uzd8(masyvas) {
  let eile = masyvas.sort((a, b) => a - b);
  let unikalu = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] !== masyvas[i + 1]) {
      unikalu.push(masyvas[i]);
    }
  }
  return unikalu;
}
console.log(uzd8(uzd4M));
console.groupEnd();
console.group("9**");
// function uzd9(masyvas,...rest){
//     let like = rest.flat()
//     let atsakymas=[];
//     console.log(masyvas,like)
//     for(let i=0 ; i< like.length; i++){
//         if(masyvas.includes(like[i])){
//             if(!atsakymas.includes(like[i])){
//                 atsakymas.push(like[i])
//             }
//         }
//     }
//     return atsakymas
// }
function uzd9(masyvas, ...rest) {
  let atsakymas = [];
  console.dir(rest)
  for (let i = 0; i < rest.length; i++) {
    for (let a = 0; a < masyvas.length; a++) {
      if (masyvas.includes(rest[i][a])) {
        if (!atsakymas.includes(rest[i][a])) {
          atsakymas.push(rest[i][a]);
        }
      }
    }
  }
}

console.log(uzd9(uzd4M, uzd4M2, indeksai));
console.groupEnd();
console.group("10");
let uzd10M = [12, 54, 1, 65, 78, 91, 45];
function uzd10(masyvas, n) {
  let eile = masyvas.sort((a, b) => a - b);
  return eile[eile.length - n];
}
console.log(uzd10(uzd10M, 2));
console.groupEnd();
