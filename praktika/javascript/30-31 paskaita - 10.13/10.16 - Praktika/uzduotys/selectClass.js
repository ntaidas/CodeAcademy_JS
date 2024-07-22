export default class createSelect{
    constructor(props){
        this.props = props;
        return this.display();
    }
    display(){
        const container = document.createElement('select');
        this.props.attributes.forEach(attribute => {
            container.setAttribute(attribute.name,attribute.value);
        })
        this.props.options.forEach(option => {
            console.log(option)
            const optionEl = document.createElement('option');
            const optionText = document.createTextNode(option.text);
            optionEl.append(optionText)
            
            option.attributes.forEach(attribute => {
                attribute.value?optionEl.setAttribute(attribute.name,attribute.value):optionEl.setAttribute(attribute.name,'')
                
            })
            container.append(optionEl)
        })
        return container
    }
}