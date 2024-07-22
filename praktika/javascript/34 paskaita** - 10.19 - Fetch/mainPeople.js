import Card from "./modules/card.js";
const display = [];
const fetchRandomUser = () => {
  fetch(`https://randomuser.me/api`)
    .then((response) => response.json())
    .then((data) => {
      const newUser = new Card(data.results[0]);
      document.querySelector("#display").append(newUser);
      display.push(newUser);
    });
};
document
    .querySelector('#rndm > h1 > span')
    .addEventListener('click',fetchRandomUser)



