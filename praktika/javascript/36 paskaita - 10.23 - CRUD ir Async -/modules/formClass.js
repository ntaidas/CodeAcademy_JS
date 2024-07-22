export default class FormInput{
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        const label = document.createElement('label');
        const labelTxt = document.createTextNode(this.props.labelText)
        label.appendChild(labelTxt)
        label.setAttribute('for',this.props.for);
        

        const input = document.createElement('input')
        input.setAttribute('id',this.props.for)
        input.setAttribute('name', this.props.for);
        Object.keys(this.props.inputAttributes).forEach(attr => {
            input.setAttribute(attr,this.props.inputAttributes[attr])
        })

        if(this.props.checked){
            input.checked = this.props.checked
        }
        //console.dir(label,input)
        div.append(label,input);
        return div
    }
}