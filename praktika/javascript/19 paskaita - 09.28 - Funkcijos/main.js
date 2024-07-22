///     Funkcijos

/*
    Funkcija yra uzvadintas kodas, kuris nevyksta kol i ji nera kreipiamasi.
    Funkcijos gali priimti argumentus ir naudoti juos kaip parametrus.
    Funkcijos gali grazinti duoomenis. 

    Syntax:
        function pavadinimas(parametras){
            veiksmai...
        }

    Call: pavadinimas(argumentas)

    parametras - funkcijos viduje naudojamas kintamasis, kurio reiksme priklauso nuo funkcijai paduodamos informacijos  i ja kreipimosi metu.
    argumentas - reiksme, kurie paduodame funkcijai i ja kreipdamiesi.
*/

let vardas = "Aidas";

function pasisveikinimas(name) {
  console.log(name, "hello");
}

// Kreipimasis i DOM

/*
 DOM - document object model

 Kreipimasis i dokumente esancius elementus (tagus)-
 document.querySelector('selektorius')
 Ivykio klausimasis dokumente esancio elemento.
 addEventListener('event',callback/function)
*/

function puslapis() {
  let sekcija = document.querySelector("#pirmas");
  console.dir(sekcija);
  let heading = sekcija.children[0];
  heading.style.fontSize = "50px";
  let img = document.createElement('img')
  img.style.height = '200px';
  img.style.width= 'auto';
  img.setAttribute('src','https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80')
  sekcija.appendChild(img)
}

let button = document.querySelector("#pirmas > button");
console.dir(button);
button.addEventListener("click", puslapis);

//Metodai

/*

    metodas yra funkcija,, kuri priklauso kazkokiam elementui/kintamajam/objektui.

    Vieni metodai modifikuoja pradinius duomenis, kiti ne.


 stringu metodai  

concat - sujungia stringus i viena.
    string.concat(string1)
endswith - patikrina ar su tam tikra simboliu seka baigiasi stringas. nemodifikuoja, o grazina true or false
    katinas.endsWith('as') - true
slice()- iskepra simbolius nuo nurodytos vietos(imtinai) iki nurodytos vietos(neimtinai). 
    'katinas'.slice(2,5) - 'tin'
string.toLowercase
string.toUppercase
trim - panaikina tarpus stringo pradzioje ir gale

*/


// Array metodai

/*
push() - prideda nauja reiksme i masyvo gala
[1,2,3].push('haha') - 
pop() - issima reiksme is masyvo galo
unshift() - nprideda nauja reiksme i masyvo pradzia
shift() - isima reiksme is masyvo pradzios
concat()
slice()
splice()
reverse()
skaiciams:
sort()

math methods:
Math.ceiling(5.5) = 5 - suapvalina iki didziausio sveikojo skaiciaus
Math.floor(5.5) = 6 - suapvalina iki maziausio sveikojo skaiciaus
Math.random() - grazina skaiciu nuo 0 iki 1



*/
