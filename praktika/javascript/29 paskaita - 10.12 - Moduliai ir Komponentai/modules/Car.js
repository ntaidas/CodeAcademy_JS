import { randomColor } from "./helperFunctions.js";
import Paragraph from "./par.js";

export default class Car {
  #make;
  #model;
  #year;
  #basePrice;
  #engineType;
  #photo;
  #color;
  constructor({ make, model, year, basePrice, engineType, photo}) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#basePrice = basePrice;
    this.#engineType = engineType;
    this.#photo = photo;
    this.#color = randomColor();
    return this.render();
  }
  // 2)budas constructor(props){
  //     this.props = props;
  // }
  // 3)budas  constructor(props){
  //     this.make=props.make;
  //     this.model=props.model;
  //     this.color=randomColor();
  //     ............
  //   }
  render() {
    const divCard = document.createElement("div");
    divCard.classList.add("card");
    const heading = document.createElement("h1");
    const headingText = document.createTextNode(`${this.#make} ${this.#model}`);
    heading.appendChild(headingText);
    const image = document.createElement("img");
    image.setAttribute('src',this.#photo);
    image.setAttribute('alt',`Photo of ${this.#make} ${this.#model}`);
    const display = document.createElement('div');
    // const par1 = document.createElement('p')
    // const par1text = document.createTextNode(`Year: ${this.#year}`)
    // par1.appendChild(par1text)
    const par1 = new Paragraph(`Year: ${this.#year}`)
    // const par2 = document.createElement('p')
    // const par2text = document.createTextNode(`Price: ${this.getPrice()}`)
    // par2.appendChild(par2text)
    const par2 = new Paragraph(`Price: ${this.getPrice()}`)
    // const par3 = document.createElement('p')
    // const par3text = document.createTextNode(`Engine: ${this.#engineType}`)
    // par3.appendChild(par3text)
    const par3 = new Paragraph(`Engine: ${this.#engineType}`)
    const par4 = document.createElement('p')
    const par4text = document.createTextNode(`Color: `);
    const colorSpan = document.createElement('span');
    colorSpan.classList.add('colorBox');
    colorSpan.style.background = this.#color;
    par4.append(par4text,colorSpan);
    display.append(par1,par2,par3,par4)
    divCard.append(heading,image,display)
    return divCard;
  }
  getMake() {
    return this.#make;
  }
  setMake(newMake) {
    this.#make = newMake;
    return `sekmingai pakeista`;
  }
  getBasePrice() {
    return this.#basePrice;
  }
  getPrice() {
    switch (this.#engineType) {
      case "gas":
        return this.#basePrice + 200;
      case "petrol":
        return this.#basePrice + 350;
      case "electric":
        return this.#basePrice + 1000;
      default:
        return this.#basePrice;
    }
  }
}
