function randomThree() {
  return Math.ceil(Math.random() * 3);
}
let buttons = document.querySelectorAll("button");

function game() {
  let a = randomThree();
  console.log(a);
  for (let button of buttons) {
    button.addEventListener("click", () => {
      if (button.textContent == a) {
        alert("Yay");
      } else {
        alert("Nay");
      }
    });
  }
}

game();
