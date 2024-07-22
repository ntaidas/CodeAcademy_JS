const sum = (nr1, nr2) => {
  return nr1 + nr2;
};
const substraction = (nr1, nr2) => {
  return nr1 - nr2;
};
const multiplication = (nr1, nr2) => {
  return nr1 * nr2;
};
const division = (nr1, nr2) => {
  return nr1 / nr2;
};

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};

export { sum, substraction, multiplication, division, randomColor };
