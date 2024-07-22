let menesis = prompt("koks dabar menesis?");
menesis = menesis.toLowerCase();

switch (menesis) {
  case "sausis":
  case "vasaris":
  case "gruodis":
    alert("ugh... ziema");
    break;
  case "kovas":
  case "balandis":
  case "geguze":
    alert("pagaliau pavasaris");
    break;
  case "birzelis":
  case "liepa":
  case "rugpjutis":
    alert("VASARA!");
    break;
  case "rugsejis":
  case "spalis":
  case "lapkritis":
    alert("jau ruduo...");
    break;
  default:
    alert("prasiau menesio");
}

console.log;
