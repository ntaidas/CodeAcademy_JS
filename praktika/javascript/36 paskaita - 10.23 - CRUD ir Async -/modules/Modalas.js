export default class Modalas{
    constructor(){
      return this.render();
    }
    render(){
      const modal = document.createElement('dialog');
      modal.setAttribute('id', 'formosModalas');
      modal.addEventListener('click', e=>{
        const dialogDimensions = modal.getBoundingClientRect();
        if(
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ){
          this.closeModal(modal)
        }
      })
      modal.addEventListener('keydown',e=>{
        if(e.code === 'Escape'){
          this.closeModal(modal)
        }
      })

      
      const closeIcon = document.createElement('span');
      closeIcon.classList.add('bi-x-octagon-fill');
      closeIcon.classList.add('bi');

      closeIcon.addEventListener('click',() => this.closeModal(modal))
      modal.appendChild(closeIcon)
      

      return modal;
    }
    closeModal(modal){
      modal.close()
      modal.remove()
    }
  }