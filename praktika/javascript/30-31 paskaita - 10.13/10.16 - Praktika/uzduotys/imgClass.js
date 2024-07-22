export default class Image{
    constructor(props){
        this.props = props;
        return this.display();
    }
    display(){
        const img = document.createElement('img')
        console.log(this.props.attributes)
        this.props.attributes.forEach( attribute => {
            img.setAttribute(attribute.name,attribute.value)
        } )
        return img
    }

}