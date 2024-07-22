import niceTime from "./hoursClass.js";
import Time from "./hoursClass.js";

export default class Travel{
    constructor(destination,location,length, price, pic){
        this.destination = destination;
        this.location = location;
        this.laikas = length;
        this.price = price;
        this.pic = pic;
        return this.display();
    }
    display(){
        const card = document.createElement('div');
        card.classList.add('card');
        const destination = document.createElement('h3');
        const destinationText = document.createTextNode(this.destination);
        destination.append(destinationText);
        const location = document.createElement('p'); 
        const locationText = document.createTextNode(this.location);
        location.append(locationText);
        location.classList.add('hidden');
        const length = document.createElement('p');
        const lengthNumber = document.createTextNode(niceTime(this.laikas));
        length.append(lengthNumber);
        length.classList.add('hidden');
        const price = document.createElement('p');
        const priceNumber = document.createTextNode(`${this.price} pinigu`);
        price.append(priceNumber);
        price.classList.add('hidden');
        // const pic = document.createElement('img')
        // pic.setAttribute('src',this.pic)
        card.style.backgroundImage = `${this.pic}`
        card.append(destination,location,length,price)
        return card
    }
}