export default class AtsiskaitymoKortele{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    const div = document.createElement('div');
    div.classList.add('kortele');
    
    const heading = document.createElement('h3');
    const headingText = document.createTextNode(this.props.pavadinimas);
    heading.appendChild(headingText);

    const status = document.createElement('p');
    const statusText = document.createTextNode(
      this.props.islaikytas ? "Išlaikytas" : "Neišlaikytas"
    );
    status.appendChild(statusText);

    div.append(heading, status);

    div.addEventListener('click', () => this.statusoKeitimas(statusText));

    return div;
  }
  statusoKeitimas(text){
    // console.log('paspaudei ant id: ', this.props.id);
    // console.log(this.props.islaikytas);

    // 1 - pakeisti kortele vizualiai ekrane
    this.props.islaikytas = !this.props.islaikytas;
    text.nodeValue = this.props.islaikytas ? "Išlaikytas" : "Neišlaikytas";

    // 2 - pakeisti ir duomenis JSON faile
    fetch(`http://localhost:3000/atsiskaitymai/${this.props.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ islaikytas: this.props.islaikytas })
    })
  }
}