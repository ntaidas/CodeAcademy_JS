import Elementas from "./elementClass.js";

export default class TvCard {
  constructor({
    title,
    genre,
    rating,
    releaseDate,
    finished,
    description,
    cover,
    lenght,
    mainCast,
  }) {
    this.id = Date.now();
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.releaseDate = releaseDate;
    this.finished = finished;
    this.description = description;
    this.cover = cover;
    this.lenght = lenght;
    this.mainCast = mainCast;
    return this.display();
  }
  display(){
    const card = document.createElement('div')
    card.classList.add('card')
    const header = new Elementas('h1',this.title);
    const genre = new Elementas('h3', this.genre);
    const rating = new Elementas('h3',this.rating);
    const releaseDate = new Elementas('h4',`${this.releaseDate} - `);
    const finished = new Elementas('h4',(this.finished?this.finished:'Ongoing'));
    const description = new Elementas('p',this.description);
    const cover = new Elementas('img','',this.cover);
    const lenght = new Elementas('h4',this.lenght);
    const charContainer = document.createElement('div');
    charContainer.classList.add('charContainer');
    (this.mainCast).forEach( cast => {
        const charCard = document.createElement('div');
        const character = new Elementas('p',cast.name);
        const charPic = new Elementas('img','',cast.picture)
        charCard.append(character,charPic)
        charContainer.append(charCard)
    })
    card.append(header,cover,rating)

    return card
  }
}
