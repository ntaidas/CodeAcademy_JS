import Image from "./uzduotys/imgClass.js";
import List from "./uzduotys/listClass.js";
import { data1_1, data1_2, data1_3, data1_4, data1_5, data2, data3, data4 } from "./data/data.js";
import Paragraph from "./uzduotys/parClass.js";
import Header from "./uzduotys/headerClass.js";
import Elementas from "./uzduotys/elementClass.js";
import createSelect from "./uzduotys/selectClass.js";
import Table from "./uzduotys/tableClass.js";
import FullName from "./uzduotys/nameTableClass.js";
import Time from "./uzduotys/hoursClass.js";
import Travel from "./uzduotys/travelClass.js";
import niceTime from "./uzduotys/hoursClass.js";


const container = document.querySelector('#container')

// const tusciaNuotrauka = new Image(imgData[1])
// container.append(nuotrauka,tusciaNuotrauka)
const sarasas = new List(data2);
const nuotrauka = new Image(data1_1);
const paragrafas = new Paragraph(data1_2);
const headeris = new Header(data1_3);
const elementas1 = new Elementas(data1_4);
const elementas2 = new Elementas(data1_5);
const selektas = new createSelect(data3);
const forma = new Elementas({tagName:'form'})
forma.append(selektas)
const lentele = new Table(data4)
container.append(sarasas,nuotrauka,paragrafas,headeris,elementas1,elementas2,forma,lentele)
console.log(sarasas)


//// 2) uzduotis

document.querySelector('#uzd2>form').addEventListener('submit',e =>{
    e.preventDefault();
    console.log(e.target.elements.fullName.value);
    let fullName = e.target.elements.fullName.value;
    fullName = fullName.trim();
    fullName = fullName.split(' ');
    const firstName = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1).toLowerCase();
    const lastName = fullName[1].charAt(0).toUpperCase() + fullName[1].slice(1).toLowerCase();
    console.log(firstName,lastName);
    const addToTable = new FullName(firstName,lastName);
})


//// 3) uzduotis 

document.querySelector('#uzd3 > form').addEventListener('submit', e =>{
    e.preventDefault();
    const DESTINATION = e.target.elements.tripDestinationName.value;
    const LOCATION = e.target.elements.tripLocation.value;
    const LENGTH = e.target.elements.tripLength.value;
    const PRICE = e.target.elements.tripPrice.value;
    const IMAGE = e.target.elements.image.value;
    const CARD = new Travel(DESTINATION,LOCATION,LENGTH,PRICE,IMAGE);
    console.dir(CARD)
    document.querySelector('#uzd3 > .display').appendChild(CARD)
    console.log()
})

const laikas = niceTime(100)
console.log(laikas)