let person1 = {
  name: "Aidas",
  age: 32,
  city: "Vilnius",
  sex: "male",
};
let person2 = {
  name: "Gintarija",
  age: 26,
  city: "Vilnius",
  sex: "female",
};

let person = {
  name: prompt("Koks tavo vardas?"),
  age: prompt("Kiek tau metu?"),
  city: prompt("Is kokio tu miesto?"),
};

let lytis = prompt("kokia tavo lytis?");
lytis = lytis.toLowerCase();

if (lytis === "vyras") {
  person.sex = "male";
} else if (lytis === "moteris") {
  person.sex = "female";
} else {
  alert("ERROR 404! Sex not found");
  if (lytis === "vyras") {
    person.sex = "male";
  } else if (lytis === "moteris") {
    person.sex = "female";
  } else {
    alert("ERROR 404! Sex not found");
  };
};

function sexCheck(object) {
  if (object.sex === "male") {
    return alert("Tu esi tikras vyras!");
  } else if (object.sex === "female") {
    return alert("Tu esi nuostabi moteris!");
  } else {
    alert("no sex");
  };
};

sexCheck(person);
