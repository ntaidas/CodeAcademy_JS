/*      Loops
    besukartojantis veiksmas

    ciklai vykdomi tol, kol atitinka nurodyta salyga.
        gali vykti numatyta kieki kartu
        gali vykti nenumatyta kieki kartu
        gali vykti begalybe kartu - BLOGAI

    Ciklu tipai:
        for(skaitliuko sukurimas; salyga; ?){...veiksmai...}
            for of - array
            for in - objektams
        while(salyga){...veiksmai...}
            do{} while() - padaro veiksma ir jei salyga tiesa tada kartoja
        array iteraciniai metodai:
            forEach()
            filter()
            map()
            reduce()
            some()
            every()
            flatMap()
            reduceRight()
            find()
            findLast()
            findIndex()
            findLastIndex()
            ...
        
        operatoriai:
            kintamasis++ - didinti kintamaji per vieneta PO ciklo iteracijos
            kintamasis-- - mazinti kintamaji per vieneta PO ciklo iteracijos
          ++kintamasis - didinti kintamaji per vieneta PRIES ciklo iteracijos
          --kintamasis - mazinti kintamaji per vieneta PRIES ciklo iteracijos

        

*/

//          for
/*
 kai galime apskaiciuoti reikalinga iteraciju kieki
*/

console.groupCollapsed('for intro');
for(let i = 0; i < 100 ;i++ ){
    console.log(i);
}
console.groupEnd();
//          while
/*
    naudojamas kai negali zinoti reikalingo itericiju kiekio
*/
console.groupCollapsed('while intro');
let i = 0;
while(i <= 10){
    console.log('while ciklas', i);
    i++
}


console.groupEnd();

//         do while
/*
    naudojamas tuomet kai reikia bent karta ivykdyti veiksma
*/

console.group('do while')
do{
    console.log('do while daro')
} while(false);
console.groupEnd();

//         for of
/*
    
*/

console.groupCollapsed('for of');
let array = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;
let didziausias = Number.MIN_SAFE_INTEGER;
for(let numeris of array){
    console.log(numeris);
    suma += numeris;
}
console.log('suma', suma)
console.log('viduris', suma/array.length)
console.groupEnd();

//         for(let key in object){}
/*
    Naudojant for in IR Object.keys() objektor aktiniai zodziai yra patalpinami kintamuosius ir tam, kad juos panaudotume, turime i objekta kreiptis nebe per taska, bet per lauztinius skliaustelius: objektas.raktas - blogai; objektas[raktas] - gerai;
*/

console.groupCollapsed('for in');
let objektas = {
    pirmas: 'hada',
    antas: 'hihi',
    trecias: 'einam valgyt'
}
for(let raktas in objektas){
    console.log(raktas);
    console.log(objektas.raktas); //bad
    console.log(objektas[raktas]); // weird but good
}
console.groupEnd();

// for of VS for
console.group('for of VS for');
console.groupCollapsed('for of')
let masyvasPalyginimui = [1,2,3,4,5,6,7,8,9];
/// reikia visus skaicius ispausdinti i ekrana
for(let number of masyvasPalyginimui){
    console.log(number)
}
console.groupEnd();
console.groupCollapsed('for')
for(let i = 0 ; i <= masyvasPalyginimui.lenght-1; i++){
    console.log(masyvasPalyginimui[i])
}
console.groupEnd();
console.groupEnd();