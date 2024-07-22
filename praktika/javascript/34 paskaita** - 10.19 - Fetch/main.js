import BarborosPreke from "./modules/barborosPrekes.js"

const fetchBarboraStock = () => {
    fetch(`https://sophisticated-humane-dandelion.glitch.me/`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        data.forEach(preke => {
            const cardDiv = new BarborosPreke(preke);
            document.querySelector('#prekes').appendChild(cardDiv)
        })
    })
}

fetchBarboraStock();

document.querySelector('#barborosPrekes > form').addEventListener('submit', e => {
    e.preventDefault();
    const preke = {
        id: Date.now(),
        title : e.target.elements.title.value,
        price : e.target.elements.price.valueAsNumber,
        image: e.target.elements.picture.value
    };
    const prekesDiv = new BarborosPreke(preke)
    document.querySelector('#prekes').appendChild(prekesDiv)
    
    fetch(`https://sophisticated-humane-dandelion.glitch.me/`, {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(preke)
    })
})

