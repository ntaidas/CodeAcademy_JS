export default class BarborosPreke {
  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.price = props.price;
    this.picture = props.image;
    return this.display();
  }
  display() {
    const div = document.createElement("div");
    div.classList.add('card')
    const titleE = document.createElement('h1');
    const titleText = document.createTextNode(this.title);
    titleE.append(titleText);
    const priceE = document.createElement('p');
    const priceTxt = document.createTextNode(this.price);
    priceE.append(priceTxt);
    const pic = document.createElement('img');
    pic.setAttribute('src',this.picture);
    pic.setAttribute('alt', this.title);
    const deleteBtn = document.createElement('button');
    const deleteBtntxt = document.createTextNode('X');
    deleteBtn.append(deleteBtntxt);
    deleteBtn.addEventListener('click', ()=> this.delete(div));

    div.append(pic,titleE,priceE,deleteBtn);
    return div;
  }
  delete(trinamasElementas){
    trinamasElementas.remove();
    console.log(`triname elementa ${this.title}`);
    fetch(`https://sophisticated-humane-dandelion.glitch.me/${this.id}`,{method:"DELETE"});
  }
}
