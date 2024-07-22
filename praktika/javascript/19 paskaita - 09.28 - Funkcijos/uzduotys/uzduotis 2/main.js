function randomFive(){
    return Math.ceil(Math.random() * 5)
   
}

console.log(randomFive())

function randomRange(nuo,iki){
    return Math.floor(Math.random() * (iki-nuo+1)) + nuo
}