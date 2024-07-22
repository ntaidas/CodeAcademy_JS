let h = document.querySelector('h1')
let button = document.querySelector('button')
let i = 0

function count(){ 
     i+=1
     h.textContent=i
    
}

button.addEventListener('click',count)