import TvCard from "./modules/tvClass.js"

fetch("http://localhost:3000/tvShows")
    .then(res => res.json())
    .then(tvShows => {
        console.log(tvShows)
        tvShows.forEach(show => {
            const card = new TvCard(show);
            document.querySelector('#library').appendChild(card)

        })
    })