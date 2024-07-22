"use strict;"

fetch("http://localhost:3000/zmones")
  .then((res) => res.json())
  .then((zmones) => {
    zmones.forEach((zmogus) => {
      console.log(zmogus);
    });
  });

let itemId = 6;

fetch(`http://localhost:3000/zmones/${itemId}`)
  .then((res) => res.json())
  .then((zmogus) => {
    console.log(zmogus);
  });



// let removeID = 999
// fetch(`http://localhost:3000/zmones/${removeID}`, {method:"DELETE"})

// fetch("http://localhost:3000/masinos",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         id: Date.now(),
//         marke: "Fiat",
//         modelis: "Sena"
//     })
// })