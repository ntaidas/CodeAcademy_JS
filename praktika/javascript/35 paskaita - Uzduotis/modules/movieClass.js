import Elementas from "./elementClass.js";

export default class MovieCard{
    constructor({id,title,genre,tier,releaseDate,cover,description,imdbRating}){
        this.id = id;
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
        const cover = new Elementas('img','',this.cover);
        const moreButton = document.createElement('div')
        const more = document.createTextNode('More...')
        moreButton.append(more)
        moreButton.classList.add('imgCover')
        moreButton.addEventListener('click', ()=> this.showMore(card,header,cover,date))
        const date = new Elementas('p',this.releaseDate);
        const deleteButton = new Elementas('button','X');
        deleteButton.addEventListener('click', ()=> this.deleteCard(card))
        card.append(header,cover,moreButton,date,deleteButton)
        return card
    }
    deleteCard(card){
        card.remove();
        fetch(`http://localhost:3000/movies/${this.id}`, {method:"DELETE"})
    }
    showMore(card,header,cover,date){
        // card.remove();
        const bigBox = document.createElement('div')
        bigBox.setAttribute('id','bigBox')
        const rightBox = document.createElement('div');
        rightBox.classList.add('rightBox');
        const leftBox = document.createElement('div');
        leftBox.classList.add('leftBox');
        bigBox.append(leftBox,rightBox);

        /// LEFT BOX

        const tier = new Elementas('h1',this.tier);
        tier.classList.add(this.tier)
        const rating = new Elementas('p',`IMDB rating: ${this.rating}`);
        leftBox.append(tier,cover,date,rating);

        /// RIGHT BOX
        const genre = new Elementas('h3',this.genre);
        const description = new Elementas('p',this.description);
        rightBox.append(header,description ,genre)

        document.querySelector('#infoBox').appendChild(bigBox)
        
    }
}