function randomHundred(){
    return Math.ceil(Math.random() * 100)
   
}

function randomRange(nuo,iki){
    return Math.floor(Math.random() * (iki-nuo+1)) + nuo
}

// function randomArray(){
//     let masyvas = []
//     for(let i=0;i<10;i++){
//         let a = randomHundred()
//         masyvas.push(a)
//     }
//     return masyvas
// }

// function randomArray(ilgis){
//     let masyvas = []
//     for(let i=0;i<ilgis;i++){
//         let a = randomHundred()
//         masyvas.push(a)
//     }
//     return masyvas
// }

function randomArray(ilgis,pradzia,pabaiga){
    let masyvas = []
    for(let i=0;i<ilgis;i++){
        let a = randomRange(pradzia,pabaiga)
        masyvas.push(a)
    }
    return masyvas
}


