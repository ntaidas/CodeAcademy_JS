import Elementas from "./elementClass.js";

export default class MovieCard{
    constructor(id,title,genre,tier,releaseDate,cover,description,imdbRating){
        this.id = id?id:Date.now();
        this.title = title;
        this.genre = genre;
        this.tier = tier;
        this.releaseDate = releaseDate;
        this.cover = cover;
        this.description = description;
        this.rating = imdbRating;
        return this.display();
    }
    display(){
        const card = document.createElement('div');
        card.classList.add('card',this.tier)
        const header = new Elementas('h1',this.title);
        const cover = new Elementas('img','',this.cover)
        const date = new Elementas('p',this.releaseDate)
        card.append(header,cover,date)
        return card

    }

}