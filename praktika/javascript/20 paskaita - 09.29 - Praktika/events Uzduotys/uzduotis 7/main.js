let body = document.querySelector('body')
let button = document.querySelectorAll('button')
console.dir(button)

function alaus(){
    let h = document.createElement('h1')
    h.textContent = 'Alaus!!!'
    body.appendChild(h)
}
function vaikas(){
    alert('Nepilnametis - uzauk!')
}

button[0].addEventListener('click',alaus)
button[1].addEventListener('click',vaikas)