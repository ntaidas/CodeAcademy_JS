class Pavadinimas {
  consturctor(par1, par2) {
    this.par1 = par1;
    this.par2 = par2;
  }
}

new Pavadinimas(1, 2);

class Zmogus {
  constructor(vardas, pavarde, gimimoData) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.pilnasVardas = this.vardas + "" + this.pavarde;
    this.gimimoData = gimimoData;
    this.arMiega = false;
    this.amzius = new Date().getFullYear() - this.gimimoData;
  }
  eitiMiegoti() {
    if (this.arMiega) {
      return `${this.vardas} jau miega.`;
    }
    this.arMiega = true;
    return `${this.vardas} nuejo miegoti.`;
  }
  atsibusti() {
    if (!this.arMiega) {
      return `${this.vardas} jau atsibudes`;
    }
    this.arMiega = false;
    return `${this.vardas} sako "Labas Rytas k  !"`;
  }
  pasisveikinimas() {
    return this.vardas + ' sako "Labas!"';
  }
  sudeti(a, b) {
    return `${this.vardas} sudeda ${a} ir ${b} ir gauna atsakyma: ${a + b}`;
  }
  pasisveikina(zmogus) {
    return `${this.vardas} pasisveikina su ${zmogus.vardas}`;
  }
}

//const zmogus0 = new Zmogus('Rokas','Banaitis',1996)
//console.log(zmogus0)
//const zmogus1 = new Zmogus('Petras','Petraitis',1980)
//console.log(zmogus1)

const zmones = [
  new Zmogus("Rokas", "Banaitis", 1996),
  new Zmogus("Petras", "Petraitis", 1980),
];

console.log(zmones[0], zmones[1]);

console.log(zmones[0].pasisveikinimas());
console.log(zmones[0].sudeti(1, 3));

/// Uzduotis 1)

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.amzius = new Date().getFullYear() - this.year;
  }
  helloCar() {
    return `Labas as esu ${this.name} ir man yra ${this.amzius} metu`;
  }
}

const cars = [
  new Car("Fiat", 2003),
  new Car("BMW", 2022),
  new Car("Opel", 1991),
  new Car("Nissan", 1998),
  new Car("Toyota", 1986),
];

console.log(cars);

/// Uzduotis 2
function randomRGB() {
  return Math.floor(Math.random() * 255);
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const kvadratai = [
  new Rectangle(5, 4),
  new Rectangle(3, 5),
  new Rectangle(10, 15),
  new Rectangle(10, 10),
];

console.log(kvadratai);

//// Uzduotis 3

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.cordinates = x + "." + y;
  }
  distance(nextPoint) {
    const calc = Math.hypot(nextPoint.x - this.x, nextPoint.y - this.y);
    return calc;
  }
}

const taskai = [
  new Point(1, 2),
  new Point(2, 3),
  new Point(3, 4),
  new Point(4, 5),
];

console.log(taskai);
console.log(taskai[2].distance(taskai[3]));

/// uzduotis 4
class Rectangle_3D {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  volume() {
    return this.width * this.height * this.depth;
  }
  surfaceArea() {
    return (
      2 *
      (this.width * this.height +
        this.width * this.depth +
        this.height * this.depth)
    );
  }
  perimeter() {
    return (this.width + this.height + this.depth) * 4;
  }
}

/// uzduotis 5

//1)
document
  .querySelector("#penkta1Uzduotis > form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const ats = document.querySelector("#penkta1Uzduotis > div");
    const width = e.target.elements.width.valueAsNumber;
    const height = e.target.elements.height.valueAsNumber;
    const figura = new Rectangle(width, height);
    const plotas = document.createElement("p");
    const plotasText = document.createTextNode(`Plotas yra: ${figura.area()}`);
    ///plotasText.style.color = figura.color
    plotas.style.color = figura.color;
    plotas.appendChild(plotasText);
    const perimetras = document.createElement("p");
    const perimetrasText = document.createTextNode(
      `Perimetras yra: ${figura.perimeter()}`
    );
    ///plotasText.style.color = figura.color
    perimetras.style.color = figura.color;
    perimetras.appendChild(perimetrasText);
    console.log(plotas);
    console.log(ats);
    const canvas = document.createElement('canvas')
    console.log(canvas)
    const context = canvas.getContext('2d');
    console.log(context)
    canvas.style.background = 'black';
    context.fillStyle = figura.color
    context.fillRect(10,10,width*10,height*10)
    ats.append(plotas, perimetras,canvas);
  });

//2)
document
  .querySelector("#penkta2Uzduotis > form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const display = document.querySelector("#penkta2Uzduotis > div");
    const k = e.target.elements;
    const x1 = k.x1.valueAsNumber;
    const x2 = k.x2.valueAsNumber;
    const y1 = k.y1.valueAsNumber;
    const y2 = k.y2.valueAsNumber;
    const point1 = new Point(x1,y1);
    const point2 = new Point(x2,y2);
    const distance = point1.distance(point2);
    const ats = document.createElement('p');
    const atsText = document.createTextNode('Atstumas tarp siu tasku yra '+distance);
    ats.appendChild(atsText);
    display.appendChild(ats)


  });


//3)
document
  .querySelector("#penkta3Uzduotis > form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const ats = document.querySelector("#penkta3Uzduotis > div");
    const width = e.target.elements.width.valueAsNumber;
    const height = e.target.elements.height.valueAsNumber;
    const depth = e.target.elements.depth.valueAsNumber
    const figura = new Rectangle_3D(width, height,depth);
    const turis = document.createElement("p");
    const turisText = document.createTextNode(`Turis yra: ${figura.volume()}`);
    ///plotasText.style.color = figura.color
    turis.appendChild(turisText);
    const perimetras = document.createElement("p");
    const perimetrasText = document.createTextNode(
      `Perimetras yra: ${figura.perimeter()}`
    );
    perimetras.appendChild(perimetrasText);
    const surfaceArea = document.createElement("p");
    const surfaceAreaText = document.createTextNode(`Pavirsiaus plotas yra: ${figura.surfaceArea()}`);
    surfaceArea.appendChild(surfaceAreaText);
    ats.append(turis, perimetras,surfaceArea);
    console.log(ats);
  });