//1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes, iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.
console.group("1");
let masyvas1 = [1,2,3,4,5,6,7,8]
let [,,pirmas,...rest] = masyvas1
console.log(pirmas)
console.dir(rest)
console.groupEnd();
//2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1'oji būtų pakeistu pavadinimu, 2'oji turėtų default reikšmę, 3'oji būtų iš viduje nestinto objekto, 4'oji būtų iš viduje nestinto objekto su pakeistu pavadinimu.
console.group("2");
let aidas = {
    sex: 'vyras',
    amzius:32,
    talentai:{
        nr1:'muzika',
        nr2:'programavias',
        nr3:'charizma'
    }
}
let {sex:lytis,amzius = 'gyvas',talentai:{nr1},talentai:{nr3:didziausiasTalentas}} = aidas
console.log(lytis,amzius,nr1,didziausiasTalentas)
console.groupEnd();
//3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes išskyrus pirmas 3.
console.group("3");
let [,,,...likusios] = masyvas1
console.log(likusios)
console.groupEnd();
//4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
console.group("4");
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a,b]=[b,a];
console.log(a);
console.log(b);
console.groupEnd();