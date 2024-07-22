export default class FullName{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
        return this.drawTable();
    }
    drawTable(){
        const tableRow = document.createElement('tr');
        const firstName = document.createElement('td');
        const firstNameText = document.createTextNode(this.name);
        firstName.append(firstNameText);
        const lastName = document.createElement('td');
        const lastNameText = document.createTextNode(this.surname);
        lastName.append(lastNameText);
        tableRow.append(firstName,lastName)
        document.querySelector('tbody#listOfNames').appendChild(tableRow)
    }
}