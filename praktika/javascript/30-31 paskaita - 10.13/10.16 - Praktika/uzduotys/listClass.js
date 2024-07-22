export default class List{
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        console.log(this.props)
        const list = document.createElement(this.props.listType);
        this.props.listItems.forEach(listItem => {
            const listItemElement = document.createElement('li');
            const listItemText = document.createTextNode(listItem.text);
            listItemElement.appendChild(listItemText);
            listItem.attributes?this.props.attributes.forEach(attribute => {
                list.setAttribute(attribute.name,attribute.value);
            }): null;
            list.appendChild(listItemElement)
            listItem.attributes.forEach(attribute=>{
                listItemElement.setAttribute(attribute.name,attribute.value)
            })
        })
        return list;
    }

}

