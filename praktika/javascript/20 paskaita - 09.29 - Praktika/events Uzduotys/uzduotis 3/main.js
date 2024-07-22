let button = document.querySelector('button')

function addP(){
    let body = document.querySelector('body') 
    let p = document.createElement('p')
    p.textContent = 'Tu esi Aidas'
    body.appendChild(p)
}

button.addEventListener('click',addP)