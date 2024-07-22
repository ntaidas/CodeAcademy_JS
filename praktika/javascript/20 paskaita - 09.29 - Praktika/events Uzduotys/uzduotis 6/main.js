let h = document.querySelector('h1')
let button = document.querySelector('button')

function randomHundred(){
    return Math.ceil(Math.random() * 100)
   
}

function randomHundredDis(){
    h.textContent = randomHundred()
}

button.addEventListener('click',randomHundredDis)