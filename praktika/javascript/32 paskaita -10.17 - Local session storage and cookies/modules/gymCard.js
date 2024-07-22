export default class GymCard{
    constructor(props){
        this.props = props;
        return this.render()
    }
    render(){
        const card = document.createElement('div');
        card.classList.add('gymCard');
        const pavadinimas = document.createElement('h1');
        const pavadinimasText = document.createTextNode(this.props.vardas);
        pavadinimas.append(pavadinimasText);
        const location = document.createElement('p'); 
        const locationText = document.createTextNode(this.props.lokacija);
        location.append(locationText);
        const price = document.createElement('p');
        const priceNumber = document.createTextNode(this.props.kaina);
        price.append(priceNumber);
         const pic = document.createElement('img')
        pic.setAttribute('src',this.props.foto)
        // card.style.backgroundImage = `${this.pic}`
        card.append(pavadinimas,location,price,pic)
    
        return card
    }
}