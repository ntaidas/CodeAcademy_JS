console.log("Hello World!"); //i konsole isveda Hello World!
console.log(document.querySelector("#js").textContent); //i konsole isveda js sekcijos vidini teksta

/* 
            Komentavimas

    multiline su /* ir uzdaromas su (* /)
    single line su //
    dar galima su CTR+/ arba CTR+K+C

    Dazniausiai naudojamas pakomentuoti kazkoki kodo gabaliuka
*/

/*
            Kintamieji/variables

    var | let | const - kintamojo deklaracija. naudjama tik kintamojo sukurimui. 
        var - senasis
        let - naujasis
        const - naujasis skirtas konstantoms
        __empty__ - tiesiogiai deklaruojamas, bet nenaudotinas. globalus kintamasis
    
    kintamojoVardas - susigalvotinas pavadinimas, turi buti vienas zodis. naudojamas norint kreiptis i kintamaji.
        camelCase - kiekvienas naujas zodis is didziosios raides be tarpo
        snake_case - kiekvienas naujas zodis po apatinio bruksnio.
        kebab-case - nenaudojamas, nes (-) yra operatorius.

    = priskiriama reiksme

    reiksme - priskiri reiksme(tipa): 
        number - skaicius | aritmetinis veiksmas
        string - raide | zodis | tekstas (!!!siaip tai raidziu array!!!)  uzrasomas kabutese.
        boolean - loginis   true/false

*/
console.groupCollapsed("Intro");
let skaicius = 5;
let veiksmas = 5 + 3;
let tekstas = "labas";
let funkcionalustekstas = `labas + ${veiksmas}`;
console.log(funkcionalustekstas);
let bulijonas = true;
let skaiciusArTekstas = "5" + 5; //lygu 55 nes pavercia ataskyma stringu
console.groupEnd();

/*
        Informacijos atvaizdavymas narsykleje
  
    cosole.log() - isveda duomenis i konsole
    console.group() | console.groupCollapsed(); - sukuria konsoles grupe
    colsole.groupEnd() - uzbaigia consoles grupe
    window.alert() - ismeta alert lentele
    prompt() - ismeta lentele su klausimu ir vieta atsakymui, galima naudoti kintamajame;
    Mokinsimes ateityje: innerHTML/innerText/append...
 */


/*  
        Aritmetika/operands(operatoriai)

    Veiksmai su duomenimis

    x+y - sudetis
    x-y - atimtis
    x*y - daugyba
    x/y - dalyba
    x**n - kelimas laipsiu (3**2 = 9) 
    **(1/n) - saknies traukimas (9**(1/2)=3)
    x%y - liekana
    
    visi aritmetiniai veiksmai APART sudeties, gali buti atliekami tik su skaiciais

*/

let a = 5;
let b = 23;
let neSkaicius = '654';
let txt = 'haha';
let tiesa = true; 

console.groupCollapsed(`Aritmetika`);

    console.log('5+23', a+b);
    console.log('5-23', a-b);
    console.log('5*23', a*b);
    console.log('5/23', a/b);
    console.log('5^23', a**b);
    console.log('23**(1/5)', b**(1/a) );
    console.log('23%5', b%a);
    console.log('', neSkaicius- b); ///pavercia stringa skaicium
    console.log('', neSkaicius + b);/// pavercia stringu
    console.log('', neSkaicius * b);
    console.log('', neSkaicius / b);
    console.log('',tiesa + a); // 6
    console.log('',tiesa - a); // -4
    console.log('',tiesa * a); // 5
    console.log('',tiesa / a); // 0.2
    console.log('',tiesa + txt);
    
console.groupEnd();


/*  
        Palyginimai ir prilyginimai

      Prilyginimai
    Naujos reiksmes prilyginimas ar suteikimas:
        let kintamasis = 'labas vakaras';
        ...
        kintamasis = 'kita reiksme'

    Trumpiniai: 
    n++ - padidina kintamaji vienetu
    n-- - sumazina kintamaji vienetu
    kintamasis+= n - padidina kintamaji n
    kintamasis-= n - padidina kintamaji n
    kintamasis*= n
    kintamas/= n
    kintamasis**= n
    kintamasis**= (1/n)
    kintamasis%= n 
    

      Palyginimai

    > - daugiau
    < - maziau
    >= - daugiau arba lygu
    <= - maziau arba lygu
    == - ar lygios reiksmes
    === - ar lygios reiksmes ir tipai
    != - ar nelygios reiksmes
    !== - ar nelygios reiksmes ir tipai



*/


console.group('Prilyginimai');
let kintamasis = 'labas vakaras'
console.log(kintamasis);
kintamasis = 50;
console.log(kintamasis);
kintamasis = kintamasis + 5;
console.log(kintamasis);
kintamasis+=5;
console.log(kintamasis);
kintamasis+=b;
console.log(kintamasis);
kintamasis++
console.log(kintamasis);
console.groupEnd();


let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5
let str1 = 'a' 
let str2 = 'b' 
let str3 = 'c' 
let str4 = 'd' 
let str5 = 'e' 
let boolt1 = true
let boolt2 = true
let boolt3 = true
let booln1 = true
let booln2 = true

console.log(num1 + str1)
console.log(num2 - boolt2)
console.log(str3 / str2)
console.log(num4 % booln2)
console.log(num5 ** booln1)
console.log(booln1 + booln2)
console.log(str1++)
console.log(booln2++)
console.log(boolt2++)
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')