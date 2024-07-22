import MovieCard from "./modules/movieClass.js";

fetch("http://localhost:3000/movies")
  .then((res) => res.json())
  .then((movies) => {
    movies.forEach((movie) => {
      console.log(movie);
      const newMovie = new MovieCard(movie);
      document.querySelector("#display").append(newMovie);
    });
  });

document.querySelector("#addMovie > form").addEventListener("submit", (e) => {
  e.preventDefault();
  let movieGenre = "";
  document.getElementsByName("genre").forEach((box) => {
    if (box.checked) {
      movieGenre += `${box.value} `;
    }
  });
  console.log(movieGenre);
  const newMovie = {
    id: Date.now(),
    title: e.target.elements.title.value,
    genre: movieGenre.trimEnd(),
    tier: e.target.elements.tier.value,
    releaseDate: e.target.elements.releaseDate.valueAsNumber,
    cover: e.target.elements.cover.value,
    description: e.target.elements.description.value,
    imdbRating: e.target.elements.imdbRating.valueAsNumber,
  };
  console.log(newMovie);
  const newMovieCard = new MovieCard(newMovie);
  document.querySelector("#display").append(newMovieCard);
  fetch("http://localhost:3000/movies",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newMovie)
  })
  e.target.reset();
});

