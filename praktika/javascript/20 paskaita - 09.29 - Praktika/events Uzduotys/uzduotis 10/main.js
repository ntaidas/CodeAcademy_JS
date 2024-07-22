let h = document.querySelector('h1');
h.style.height='100vh';
h.style.lineHeight='100vh'
console.dir(h)
h.addEventListener('mousemove',()=>{
    h.textContent = 'Why are you running?'
})
h.addEventListener('click',()=>{
    h.textContent = 'Nejudinkite pelytes'
})