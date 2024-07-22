document.querySelector("#vardoTask > form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements);
  console.log(e.target.elements.vardas.value);
  console.log(e.target.elements.kartai.valueAsNumber);
  const vardas = e.target.elements.vardas.value.trim();
  const kartai = e.target.elements.kartai.valueAsNumber;
  const resultDiv = document.querySelector("#vardoTask > div");
  resultDiv.innerHTML = "";
  let text = "";
  for (let i = 0; i < kartai; i++) {
    text += `${vardas} `;
    const lygis = document.createElement("p");
    const lygisText = document.createTextNode(text.trim());
    lygis.appendChild(lygisText);
    resultDiv.appendChild(lygis);
  }
});

/// Bilieto pirkimas
document.querySelector("#bilietoTask > form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const el = e.target.elements
    const bilietoInfo = {
        vardas: el.name.value,
        pavarde: el.surname.value,
        filmas: el.movie.value,
        data: el.date.value.slice(0,10),
        laikas: el.date.value.slice(11),
        vieta: el.seat.valueAsNumber,
        ekranas: el.screen.value,
        kaina: el.screen.value === 'standart'? 6.5:9
    }
    console.dir(bilietoInfo)
    const bilietas = document.createElement('div');
    bilietas.classList.add('bilietas');
    const pirmasDiv = document.createElement('div');
    const filmoPav = document.createElement('h1');
    const filmoPavText = document.createTextNode(bilietoInfo.filmas);
    filmoPav.appendChild(filmoPavText);
    const pirkejoVardas = document.createElement('p');
    const pirkejoVardasText = document.createTextNode(`Vardas: ${bilietoInfo.vardas}`);
    pirkejoVardas.appendChild(pirkejoVardasText);
    const pirkejoPavarde = document.createElement('p');
    const pirkejoPavardeText = document.createTextNode(`Pavarde: ${bilietoInfo.pavarde}`);
    pirkejoPavarde.appendChild(pirkejoPavardeText);
    const vieta = document.createElement('p');
    const vietaText = document.createTextNode('Vieta '+ bilietoInfo.vieta);
    vieta.appendChild(vietaText);
    const ekranas = document.createElement('p');
    const ekranasText = document.createTextNode('Ekranas '+ bilietoInfo.ekranas);
    ekranas.appendChild(ekranasText);
    pirmasDiv.append(filmoPav,pirkejoVardas,pirkejoPavarde,vieta,ekranas);
    
    
    const antrasDIv = document.createElement('div');

    const data = document.createElement('p');
    const dataText = document.createTextNode('Data:'+bilietoInfo.data);
    data.appendChild(dataText);
    const laikas = document.createElement('p');
    const laikasText = document.createTextNode('Laikas:'+bilietoInfo.laikas);
    laikas.appendChild(laikasText)
    const kaina = document.createElement('p');
    const kainaText = document.createTextNode('Kaina:'+bilietoInfo.kaina);
    kaina.appendChild(kainaText)

    antrasDIv.append(data,laikas,kaina);
    bilietas.append(pirmasDiv, antrasDIv);
    document.querySelector('#bilietoTask').appendChild(bilietas)
  });

  // 1) 1 sekcijoje sukurti formą:
  // 1.1) Kurioje vartotojas gali įkelti:
  //   1.1.1) Nuotrauką
  //   1.1.2) Pavadinimą
  //   1.1.3) Aprašymą
  //   1.1.4) Datą (optional)
  //   1.1.5) Lokacija (optional)
  // 1.2 optional) Stilizuoti formą (minimaliai)
  // 1.3) Paspaudus "submit" - žemiau formos, turi būti sukurta kortelė su formoje įvestais duomenimis. (kortelė minimaliai stilizuota)
  // 1.4 extra) Galimybė vartotojui pasirinkti kortelės dizainą. (spalvos tema, elementų išdėstymas)

  document.querySelector('#pirmaUzd > form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target.elements;
    console.log(form);
    const card =document.createElement('div');
    const imgAttr = form.foto.value;
    console.log(imgAttr)
    const titleText = document.createTextNode(form.title.value);
    const paraText = document.createTextNode(form.para.value);
    const img = document.createElement('img');
    img.setAttribute('src', imgAttr);
    const title = document.createElement('h1');
    title.appendChild(titleText);
    const para = document.createElement('p');
    para.appendChild(paraText);
    card.append(title,img,para);
    document.querySelector('#pirmaUzd > div').appendChild(card)
    const stilius = form.spalva.value
    console.log(form.spalva.value)
    card.classList.add('card')
    if (stilius === 'red'){
      card.classList.add('redText')
    }else if(stilius === 'blue'){
      card.classList.add('blueText')
    }
    console.log(stilius)
    form.clear()
  })

  // 2) JS'u 2 sekcijos div'e sukurkite x stulpelių ir y eilučių (x ir y nurodomas formoje) lentelę (table) paspaudžiant ant mygtuko.

  document.querySelector('#antraUzd > form').addEventListener('submit', e =>{
    e.preventDefault();
    const el = e.target.elements;
    const x = el.x.valueAsNumber;
    const y = el.y.valueAsNumber;
    const ats = document.querySelector('#antraUzd > .ats')
    ats.innerHTML=''
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
   
    ats.appendChild(table)
    for(let i = 0; i < y;i++){
      const tr = document.createElement('tr');
      for(let a = 0; a < x; a++){
        const td = document.createElement('td')
        tr.appendChild(td)
      }
      tbody.appendChild(tr);
    }
  })

  // 3) JS'u iš 3 sekcijoje esančios formos išimkite pažymėtą opciją kai paspaudžiate mygtuką.

  document.querySelector('#treciaUzd > form').addEventListener('submit', e => {
    e.preventDefault();
    const secret = e.target.removal
    secret.remove(secret.selectedIndex)
  })

  //// 4) JS'u 4 sekcijoje esančiose formose užpildykite x/y/z laukelius ir paspaudus atitinkamą mygtuką apskaičiuokite 2D arba 3D (priklausomai ar z paliktas tušias/0 ar duotas dydis) keturkampio Plotą, Perimetrą, Paviršiaus plotą ir Turį.
  // 4.1 EXTRA) Naudojant Canvas atkurti vizualų figurų vaizdą.


  document.querySelector('#ketvirtaUzd > form').addEventListener('submit', e =>{
    e.preventDefault();
    const x = e.target.elements.x.valueAsNumber;
    const y = e.target.elements.y.valueAsNumber;
    const z = e.target.elements.z.valueAsNumber;
    console.log(x, y, z)
    const ats = document.querySelector('#ketvirtaUzd > .ats4')
    ats.innerHTML=''
    const plotas = document.createElement('p')
    const perimetras = document.createElement('p')
    const pavirsiausPlotas = document.createElement('p')
    const turis = document.createElement('p')
    ats.append(plotas, perimetras, pavirsiausPlotas, turis)
    if( !z ){
      console.log(z)
      const calcPlotas = x * y;
      const calcPlotasAts = document.createTextNode(`Plotas = ` + calcPlotas);
      plotas.appendChild(calcPlotasAts);
      const calcPerimetras = 2 * (x + y);
      const calcPerimetrasAts = document.createTextNode(`Perimetras= ` + calcPerimetras);
      perimetras.appendChild(calcPerimetrasAts);
      ats.appendChild(perimetras,plotas);
    }else{
      console.log(z)
      const calcPavPlot = 2 * ((x*y)+(x*z)+(y*z));
      const pavirsiausPlotasAts = document.createTextNode(`Pavirsiaus Plotas =` + calcPavPlot);
      pavirsiausPlotas.appendChild(pavirsiausPlotasAts);
      const calcTuris = x * y * z;
      const turisAts = document.createTextNode(`Turis = ` + calcTuris);
      turis.appendChild(turisAts);
      ats.append(pavirsiausPlotas, turis);
    }

  })