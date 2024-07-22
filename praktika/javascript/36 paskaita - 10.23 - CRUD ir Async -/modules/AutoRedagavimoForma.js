import FormInput from "./formClass.js";

export default class AutoRedagavimoForma{
    constructor(props){
      this.props = props;
      return this.render();
    }
    render(){
      console.log('forma:', this.props);
      const forma = document.createElement('form');
      
      const markesLaukas = new FormInput({
        for:'marke',
        labelText: 'Marke:',
        inputAttributes:{
          type: 'text',
          value: this.props.marke
        }

      })
      const modelioLaukas = new FormInput({
        for:'modelis',
        labelText:'Modelis:',
        inputAttributes:{
          type: 'text',
          value:this.props.modelis
          
        }
      })
      const metuLaukas = new FormInput({
        for:'metai',
        labelText: 'Metai:',
        inputAttributes:{
          type: 'number',
          min:1886,
          max:new Date().getFullYear()+2,
          value: this.props.metai
        }
      })
      const spalvosLaukas = new FormInput({
        for: 'spalva',
        labelText: 'Spalva:',
        inputAttributes:{
          type: 'color',
          value:this.props.spalva
        }
      })
      const arDauztaLaukas = new FormInput({
        for: 'arDauzta',
        labelText:'Masina buvo dauzta: ',
        inputAttributes:{
          type:'checkbox'
        },
        checked: this.props.arDauzta
      })
      const nuotraukosLaukas = new FormInput({
        for: 'photo',
        labelText: 'Masinos nuotrauka:',
        inputAttributes:{
          type: 'url',
          value:this.props.photo
        }
      })
      const submitLaukas = document.createElement('input')
      submitLaukas.setAttribute('type','submit')
      submitLaukas.setAttribute('value','Redaguoti')

      forma.append(markesLaukas,modelioLaukas,metuLaukas,spalvosLaukas,arDauztaLaukas,nuotraukosLaukas,submitLaukas)

      return forma;
    }
  }