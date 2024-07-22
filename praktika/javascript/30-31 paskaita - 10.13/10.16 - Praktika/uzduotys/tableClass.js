export default class Table {
  constructor(props) {
    this.props = props;
    return this.display();
  }
  display() {
    // function quickSetAtt(element){
    //     return element.setAttribute(attribute.name,attribute.value);
    // }
    const table = document.createElement("table");
    this.props.attributes.forEach((attribute) => {
      table.setAttribute(attribute.name, attribute.value);
    });

    /// THEAD_____________________

    const thead = document.createElement("thead");
    this.props.thead.attributes.forEach((attribute) => {
      thead.setAttribute(attribute.name, attribute.value);
    });

    const rowThead = document.createElement("tr");
    this.props.thead.row.attributes.forEach((attribute) => {
      rowThead.setAttribute(attribute.name, attribute.value);
    });
    thead.append(rowThead);

    this.props.thead.row.columns.forEach((column) => {
      const th = document.createElement("th");
      const thText = document.createTextNode(column.text);
      column.attributes.forEach((attribute) => {
        th.setAttribute(attribute.name, attribute.value);
      });
      th.append(thText);
      rowThead.append(th);
    });

    /// TBODY_____________________

    const tbody = document.createElement("tbody");
    this.props.tbody.attributes.forEach((attribute) => {
      tbody.setAttribute(attribute.name, attribute.value);
    });

    this.props.tbody.rows.forEach((row) => {
      const tr = document.createElement("tr");
      tbody.append(tr);
      row.attributes.forEach((attribute) => {
        tr.setAttribute(attribute.name, attribute.value);
      });
      row.columns.forEach((column) => {
        const td = document.createElement("td");
        const tdText = document.createTextNode(column.text);
        td.append(tdText);
        tr.append(td);
        column.attributes.forEach((attribute) => {
          td.setAttribute(attribute.name, attribute.value);
        });
      });
    });

    /// TFOOT__________________________
    const tfoot = document.createElement("tfoot");
    this.props.tfoot.attributes.forEach((attribute) => {
      tfoot.setAttribute(attribute.name, attribute.value);
    });
    const rowTfoot = document.createElement("tr");
    this.props.tfoot.row.attributes.forEach((attribute) => {
      rowTfoot.setAttribute(attribute.name, attribute.value);
    });
    tfoot.append(rowTfoot);
    this.props.tfoot.row.columns.forEach((column) => {
      const td = document.createElement("td");
      const tdText = document.createTextNode(column.text);
      td.append(tdText);
      rowTfoot.append(td);
      column.attributes.forEach((attribute) => {
        td.setAttribute(attribute.name, attribute.value);
      });
    });

    table.append(thead, tbody, tfoot);
    return table;
  }
}
