export default class Elementas {
  constructor(tagName,text,attribute) {
    this.tagName = tagName;
    this.text = text;
    this.attribute = attribute;
    return this.display();
  }
  display() {
    const element = document.createElement(this.tagName);
    if (this.text) {
      const elementText = document.createTextNode(this.text);
      element.append(elementText);
    }
    if (this.attribute) {
      element.setAttribute("src", this.attribute);
    }

    return element;
  }
}
