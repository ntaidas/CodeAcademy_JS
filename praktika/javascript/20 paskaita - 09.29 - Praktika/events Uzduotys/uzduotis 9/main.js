let body = document.querySelector('body')
let p = document.querySelector('h1')
console.dir(p)
body.addEventListener('keyup', ()=>{
    p.textContent = '"Pants are an illusion and so is death"'
})