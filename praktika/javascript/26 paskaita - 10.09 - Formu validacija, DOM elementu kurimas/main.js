document.querySelector("#validationPvz").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const DOM_pvz = document.querySelector("#DOM_pvz");
//DOM_pvz.classList.add('mediumSizeCard','card',)
let heading = document.createElement("h1");
//heading.classList.add('blueText','centeredText')
// heading.textContent = 'Korteles pavadinimas'
let headingText = document.createTextNode("Korteles pavadinimas");
heading.appendChild(headingText);
//DOM_pvz.appendChild(heading)

let paragraph = document.createElement("p");
//paragraph.classList.add('centeredText','justifiedText')
let parText = document.createTextNode(
  "As esu paragrafas sitai kortelei apie labai labai skanias baronkas"
);
paragraph.appendChild(parText);
//DOM_pvz.appendChild(paragraph);

let image = document.createElement("img");
//image.classList.add('imageSize')
image.setAttribute(
  "src",
  "https://www.lamaistas.lt/uploads/modules/articles/thumb920x573/2018/02/kaziukui-artejant-kaip-iskepti-tikras-namines-baronkas-44864.jpg"
);
image.setAttribute("alt", "baronkos");

//DOM_pvz.appendChild(image);
DOM_pvz.append(heading, image, paragraph);
DOM_pvz.classList.add("mediumSizeCard", "card");
heading.classList.add("blueText", "centeredText");
heading.classList.toggle("redText");
image.classList.add("imageSize");
paragraph.classList.add("centeredText", "justifiedText");

/// Uzduotis kartu

const DAROM_KARTU = document.querySelector("#darom");
console.log(duomenysKartu);

duomenysKartu.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("kortele");

  const heading = document.createElement("h1");
  const headingText = document.createTextNode(element.pavadinimas);
  heading.appendChild(headingText);

  const image = document.createElement("img");
  image.setAttribute("src", element.paveiksliukas);
  image.setAttribute("alt", element.paveiksliukoALT);

  const para = document.createElement("p");
  const paraText = document.createTextNode(element.paragrafas);
  para.appendChild(paraText);

  card.append(heading, image, para);
  DAROM_KARTU.appendChild(card);
});

/// Uzduotis 1) Naudodamiesi tasksData[0] duomeninis atlikite šiuos veiksmus:
// 1.1) JS'u 1 sekcijoje sukurkite antraštę.
// 1.2) JS'u 1 sekciją papildykite paragrafu su tekstu.
// 1.3) JS'u 1 sekciją papildykite paveikslėliu.
// 1.4) JS'u 1 sekciją stilizuokite priskirdami klases.

const uzd1 = document.querySelector("#uzd1");
uzd1.classList.add("kortele");
const uzd1h = document.createElement("h1");
const uzd1hText = document.createTextNode(tasksData[0].title);
uzd1h.appendChild(uzd1hText);

const uzd1p = document.createElement("p");
const uzd1pText = document.createTextNode(tasksData[0].paragraph);
uzd1p.appendChild(uzd1pText);

const uzd1Img = document.createElement("img");
uzd1Img.setAttribute("src", tasksData[0].image);
uzd1Img.setAttribute("alt", tasksData[0].title);
uzd1Img.classList.add("imageSize");

uzd1.append(uzd1h, uzd1Img, uzd1p);

/// Uzduotis 2) Naudodamiesi tasksData[1] duomenimis atlikite šiuos veiksmus:
// 2.1) JS'u 2 sekcijoje sukurkite antraštę su paveiksliukais.
// 2.2) JS'u 2 sekciją stilizuokite priskirdami klases.

const uzd2 = document.querySelector("#uzd2");

const uzd2display = document.createElement("div");
uzd2display.classList.add("display");

const uzd2h = document.createElement("h1");
const uzd2hText = document.createTextNode(tasksData[1].title);
uzd2h.appendChild(uzd2hText);
uzd2.append(uzd2h, uzd2display);
console.log(tasksData[1].images.length);
for (let i = 0; i < tasksData[1].images.length; i++) {
  const uzd2img = document.createElement("img");
  uzd2img.setAttribute("src", tasksData[1].images[i]);
  uzd2img.setAttribute("alt", tasksData[1].title);
  uzd2img.classList.add("painting");
  uzd2display.appendChild(uzd2img);
  console.log(tasksData[1].images[i]);
}

/// Uzduotis 3)  Naudodamiesi tasksData[2] duomenimis atlikite šiuos veiksmus:
// 3.1) JS'u 3 sekcijoje sukurkite antraštę su paveiksliukais.
// 3.2) JS'u 3 sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
// 3.3) JS'u 3 sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
// 3.4) JS'u 3 sekciją stilizuokite priskirdami klases.

const uzd3headerTxt = document.createTextNode(tasksData[2].title);
const uzd3header = document.createElement("h1");
uzd3header.appendChild(uzd3headerTxt);

const uzd3display = document.createElement("div");

const uzd3 = document.querySelector("#uzd3");
uzd3.append(uzd3header, uzd3display);

tasksData[2].works.forEach((element) => {
  console.log(element.title);
  const card = document.createElement("div");
  card.classList.add("kortele");
  const title = document.createElement("h1");
  const titleText = document.createTextNode(element.title);
  title.appendChild(titleText);
  const img = document.createElement("img");
  img.setAttribute("src", element.image);
  img.setAttribute("alt", element.title);
  const p = document.createElement("p");
  const pText = document.createTextNode(element.paragraph);
  p.appendChild(pText);
  card.append(title, img, p);
  uzd3display.append(card);
});

/// Uzduotis 4 extra)  Naudodamiesi tasksData[3] atlikite šiuos veiksmus:
//   4) JS'u 4 sekcijoje sukurkite filmų aprašus. Viską stilizuokite. (laisvai naudokite duotus duomenis. Dalies duomenų galite nepanaudoti. Pavyzdį kaip pateikti informaciją puslapyje galite imti iš: "https://www.imdb.com/title/tt1431045/?ref_=nv_sr_srsg_0")

/// Uzduotis 5 extra) Sukurti funkcionalumą, kuris slėptų/rodytų sekcijose atvaizduojamą informaciją. (žiūrėti paveikslėlį images/hideShow.PNG) (querySelectorAll - grąžina "masyvą" -> kurti button -> suteikti funkcionalumą)
