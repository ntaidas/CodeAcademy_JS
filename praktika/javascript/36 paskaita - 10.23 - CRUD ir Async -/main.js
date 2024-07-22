import AtsiskaitymoKortele from "./modules/AtsiskaitymoKortele.js";
import AutomobilioKortele from "./modules/AutomobilioKortele.js";

// function randomSkaicius(){ // užtrunka 2sekundes
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(Math.floor(Math.random()*5));
//     }, 2000);
//   });
// }

// async function grazintiRandomSkaiciuX_kartuPadidinta(nr){
//   const random = await randomSkaicius();
//   console.log(random*nr);
//   return random*nr;
// }

// console.log(grazintiRandomSkaiciuX_kartuPadidinta(5));

// function delay(time, data){
//   return new Promise((resolve, reject) => {
//     if(typeof(time) === 'number'){
//       setTimeout(() => resolve(data+'aaaaa'), time)
//     } else {
//       reject(new Error(`function's first parameter must be a number`));
//     }
//   })
// }
// function pazadas(){
//   delay(2000, 'labas rytas')
//     .then(data0 => {
//       console.log(data0)
//       return data0+'more data';
//     }).then(data1 => {
//       console.log(data1)
//     }).catch(error => {
//       console.log(error)
//     }).finally(() => {
//       console.log('func baigėsi')
//     })
// }
// pazadas();

fetch(`http://localhost:3000/atsiskaitymai`)
  .then(res => res.json())
  .then(atsiskaitymai => {
    atsiskaitymai.forEach(atsiskaitymas => {
      const kortele = new AtsiskaitymoKortele(atsiskaitymas);
      document.querySelector('#cRUd > div').appendChild(kortele);
    })
  })

fetch(`http://localhost:3000/automobiliai`)
  .then(res => res.json())
  .then(automobiliai => {
    automobiliai.forEach(automobilis => {
      const kortele = new AutomobilioKortele(automobilis);
      document.querySelector('#cRUd_cars > div').appendChild(kortele);
    })
  })