/*
        Kintamieji

    string, boolien, number - vakar.

    object/objektas - object{raktinisZodis:reiksme,kitasRaktinisZodis:reiksme};
        Grupuoti kintamuosius
        Reiksmes turi raktinius zodzius, pagal kuriuos galima suprasti ka reiksme reiskia.Eiliskumas nera svarbus. Objektai dazniausiai naudojami kai reiksmes reikia atskirti.

    array/masyvas - array[reiksme, reiksme, reiksme];
        Grupuoti kintamuosius.
        Reiksmes neturi raktinio zodzio ir del to nera aisku kas ka reiskia.
        Eiliskumas svarbus. Dazniausiai naudojami, kai norima vardinti vieno dalyko variacijas.


    Tiek objektas, tiek array yra konteineriniai kintamieji, skirti talpinti kitus kintamuosius.


*/
console.group('Objektai ir Masyvai into');
let asmensObjektas={
    vardas: 'Rokas',
    pavarde: 'Banaitis',
    amzius: 27,
    vedes: false
};
console.log(asmensObjektas)

let asmensMasyvas = ['Petras', 'Petrauskas', 99, true];
console.log(asmensMasyvas)

let masinosMarke1 = 'BMW'
let masinosMarke2 = 'Audi'
let masinosMarke3 = 'Fiat'
let masinosMarke4 = 'Volvo'

let masinosMarkiuObjektas ={
    marke1: 'BMW',
    marke2: 'Audi',
    marke3: 'Fiat',
    marke4: 'Volvo'
}
console.log(asmensObjektas.vardas)

let masinosMarkiuMasyvas = ['BMW','Audi','Fiat','Volvo']
console.log(masinosMarkiuMasyvas.length)
console.log(masinosMarkiuMasyvas[1])
console.groupEnd();

/*
        Nestinti masyvai ir objektai
    Kadangi masyvai ir objektai yra skirti talpinti kintamuosius, jie taip pat gali talpinti vieni kitus.
    masyvas masyve -[[masyvas],[masyvas]]
    objektas objekte - {raktZod:{}}
    masyvas objekte - {raktZod:[]}
    obejktas masyve - [{},{}]

*/

console.group('Nestinti masyvai ir objektai');
    console.group('masyvas masyve');
        let matrica = [
            ['A','B','C'],
            ['D','E','F'],
            ['G','H','I']
        ]
        console.log(matrica)
        console.log(matrica[0][1])
        console.log(matrica[2][2])
    console.groupEnd();
    console.group('objektas objekte');
        let objektasObjekte = {
            vardas: "Rokas",
            amzius: "27",
            plikas: false,
            gyvenamojiVieta:{ 
                miestas: "Kaunas",
                gatve: "Karaliaus Mindaugo",
                namoNr: 27,
                butoNr: 32,
                planeta: "Zeme",
                zemynas: 'Europa',
                salis: 'Lietuva'
            }
        }
        console.log(objektasObjekte)
        console.log(objektasObjekte.vardas)
        console.log(objektasObjekte.gyvenamojiVieta.butoNr)
    console.groupEnd();
    console.group('masyvas objekte');
        let masyvasObjekte= {
            vardas:'Rokas',
            amzius: 27,
            noriMiego: true,
            pomegiai: ['filmai', 'PC zaidimai', 'stalo zaidimai', 'vazinejimas dviraciu', 'begiojimas', 'miegojimas']
        }
    console.log(masyvasObjekte.pomegiai[masyvasObjekte.pomegiai.length-1])
    console.groupEnd();
    console.group('objektas masyve');
        let objektaiMasyve = [
            {
                vardas:'Rokas',
                pavarde:'Banaitis',
                amzius:27,
                alkanas:true
            },
            {
                vardas:'Petras',
                pavarde:'Petraitis',
                amzius:29,
                alkanas:false
            },
            {
                vardas:'Jonas',
                pavarde:'Jonaitis',
                amzius:45,
                alkanas:true
            }
        ]
        console.log(objektaiMasyve[0].vardas)
    console.groupEnd();

console.groupEnd();

/*
        Conditionals/Salygos

    Loginiai operatoriai:
    ! - not - turi buti priesinga reiksme
    && - and - abu turi buti
    || - or - vienas arba kitas

    Truthy   | Falsy
    __________________
    true     | false
    non zero | 0
    "string" | ""
    object   | undefined
    array    | null
    function | NaN

        Conditionals:
    if else

    if(if salyga){
        kodas jei tiesa
    }else if{
        jei ankstesnes false
    }else{
        jei netiesa vykdomas kodas
    }
*/