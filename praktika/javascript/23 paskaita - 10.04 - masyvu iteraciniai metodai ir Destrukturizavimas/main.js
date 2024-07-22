function skaic(testas, prak) {
  let pazymys = (3 / 22) * testas + (8 / 10) * prak;
  return pazymys;
}

//  Logical &&
console.groupCollapsed("Logical &&");
true && console.log("veiksmai vyksta...");
false && console.log("veiksmai nevyksta...");
console.groupEnd();

//  Ternary ? :
console.groupCollapsed("Ternary ? :");
let amzius01 = 25;
amzius01 > 18 ? console.log("pilnametis") : console.log("nepilnametis");
// sudetingas ir nereikalingas (else if)
amzius01 < 18 // if salyga
  ? console.log("nepilnametis") // if veikmas
  : amzius01 > 65 // else if
  ? console.log("pensininkas") // else if veiksmas
  : amzius01 >= 18 && amzius01 < 65 // else if
  ? console.log("darbingo amziaus") // else if veiksmas
  : console.log("negyvas"); // else
console.groupEnd();

// Destrukturizavimas
console.group("Destrukturizavimas");
console.groupCollapsed("masyvai");
let masyvasDes = [
  "labas",
  undefined,
  "hello",
  654,
  1,
  3,
  44,
  false,
  undefined,
  NaN,
  ":)",
];
console.log(masyvasDes);
// Be destr
let el0 = masyvasDes[0];
console.log(el0);
let el1 = masyvasDes[1] !== undefined ? masyvasDes[1] : "default reiksme";
let el2 = masyvasDes.slice(3);
// Su destr
let [em0, em1 = "default reiksme", em2] = masyvasDes;
console.log(em0, em1, em2);
// function atrinkti(masyvas, ...iskyrus){
//     console.log(masyvas,iskyrus);
// }
// atrinkti(masyvasDes,44)
console.groupEnd();
console.groupCollapsed("objektai");
let objektasDes = {
  vardas: "Rokas",
  amzius: 27,
  darboPatirtiesMetai: [3,5,2],
  gyvenamojiVieta: {
    miestas: "Kaunas",
    salis: "Lietuva",
  },
  plaukuSpalva: "ruda",
  pavarges: true,
};
console.log(objektasDes);
//be destr
let vardasBe = objektasDes.vardas;
let amziusBe = objektasDes.amzius;
let salisBe = objektasDes.gyvenamojiVieta.salis;
let vairuotojoTeisesBe = objektasDes.vairuotojoTeises
  ? objektasDes.vairuotojoTeises !== undefined
  : false;
console.log(vardasBe, amziusBe, salisBe, vairuotojoTeisesBe);
// su destr
let {
  vardas,
  amzius: metai,
  gyvenamojiVieta: { salis, ...gyvRest },
  vairuotojoTeises = false,
  ...rest
} = objektasDes;
console.log(vardas, metai, salis, vairuotojoTeises, rest, gyvRest);
// Parametru destr masyvu
console.group("parametru desrt");
function atrinkti(masyvas, ...iskyrus) {
  console.log(masyvas, iskyrus);
}
atrinkti(masyvasDes, 44);
// Parametru destr objektu
function neDarboLaikas({amzius,darboPatirtiesMetai:darboM, ...rest}){
  // let amzius = asmuo.amzius;
  // let darboM = asmuo.darboPatirtiesMetai;
//   let{amzius,darboM} = asmuo
// console.log(asmuo)
console.log(amzius)
console.log(darboM)
console.log(rest)
}
neDarboLaikas(objektasDes)
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Masyvu iteraciniai metodai");
  let masyvas = ['aaaa','b','cc','d','a','ccccccccc','g'];
  let masyvasSK = [4,5,6,12,45,888,-666,12]

  console.groupCollapsed("forEach");
    masyvas.forEach((el ,i )=> console.log(i, el));
  console.groupEnd();

  console.groupCollapsed('filter');
    let filtered  = masyvas.filter(el => el.length > 1)
    console.log(filtered)
  console.groupEnd();

  console.groupCollapsed('map');undefined

  console.groupCollapsed('reduce');
    let reducintas = masyvasSK.reduce((acc,curr)=>acc+curr)
    console.log(reducintas)
    let reducintas2 = masyvas.reduce((acc,curr)=> acc+curr)
    console.log(reducintas2)
    console.log('______________')
    let lilMas = [1,2,3,4,5]
    let red3 = lilMas.reduce((acc, curr, i)=> {
      console.log('iteracija:', i + ')')
      console.log('accumulator:', acc)
      console.log('current value:', curr)
      console.log('___')
      return acc+curr
    })
    console.log('rezultatas',red3)
  console.groupEnd();
  console.groupCollapsed('some ir every');
    let masyvasSomeEvery = [1,2,3,'a','b','c']
    let arSkaicius = masyvasSomeEvery.some(el => typeof(el) === 'number');
    let arSkaiciai = masyvasSomeEvery.every(el => typeof(el) === 'number');
    let arSkaiciusLong = masyvasSomeEvery.some(el => {
      console.log(el)
      return typeof(el) === 'number'
    });
    console.log('__')
    let arSkaiciaiLong = masyvasSomeEvery.every(el => {
      console.log(el)
      return typeof(el) === 'number'
    });
  console.groupEnd();
  console.groupCollapsed('find ir findLast');
    let raide = masyvasSomeEvery.find(el => typeof(el) === 'string')
    console.log(raide) // a
    let raideLast = masyvasSomeEvery.findLast(el => typeof(el) === 'string')
    console.log(raideLast) // c
  console.groupEnd();
  console.groupCollapsed('findIndex ir findLastIndex');
    let raideIndex = masyvasSomeEvery.findIndex(el => typeof(el) === 'string');
    console.log(raideIndex) // 3
    let raideLastIndex = masyvasSomeEvery.findLastIndex(el => typeof(el) === 'string');
    console.log(raideLastIndex) // 5
  console.groupEnd();


console.groupEnd();