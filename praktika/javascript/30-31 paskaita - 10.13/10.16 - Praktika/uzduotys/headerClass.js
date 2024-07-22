export default class Header {
  constructor(props) {
    this.props = props;
    return this.display();
  }
  display() {
    const header = document.createElement(`h${this.props.size}`);
    console.log(header)
    const headerText = document.createTextNode(this.props.text);
    header.append(headerText)
    this.props.attributes.forEach(attribute => {
      header.setAttribute(attribute.name,attribute.value)
  })
    return header
  }
}
