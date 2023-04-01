// hex color generator CHANGE HEX
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const btn2 = document.getElementById("btn2");

// run loop 6 times
btn.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomHexNumber()];
}
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomHexNumber(){
  return Math.floor(Math.random() * hex.length)
}

const colors = ["ForestGreen", "Thistle", "DarkGoldenRod", "Gold", "MediumSpringGreen", "CornflowerBlue", "Orange", "Bisque", "DarkCyan", "DarkKhaki", "DarkSeaGreen", "DimGray", "FloralWhite", "GreenYellow", "IndianRed", "HotPink", "Indigo", "LightSalmon", "MediumPurple", "MediumVioletRed", "NavajoWhite", "Olive", "OrangeRed", "PaleGreen", "PeachPuff", "Peru", "PowderBlue", "RosyBrown", "Sienna", "SlateBlue", "Tan", "Teal", "Tomato", "Wheat", "SteelBlue", "Silver", "Snow", "Plum", "PapayaWhip", "PaleTurquoise"]

btn2.addEventListener("click", function () {
  // get random number between 0 - 39 
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}