export default class Paragraph{
    constructor(props){
        this.props = props;
        return this.display();
    }
    display(){
        const par = document.createElement('p');
        const parText = document.createTextNode(this.props.text);
        par.appendChild(parText);
        this.props.attributes.forEach(attribute => {
            par.setAttribute(attribute.name,attribute.value)
        })
        return par;
    }
    
}