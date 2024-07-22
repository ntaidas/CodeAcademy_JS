export default class Paragraph{
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const par = document.createElement('p');
        const parText = document.createTextNode(this.props);
        par.appendChild(parText);
        return par;
    }
    
}