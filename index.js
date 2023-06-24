const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatedPw1Element = document.getElementById("generated-pw1");
const generatedPw2Element = document.getElementById("generated-pw2");

function handleGeneratePwClick() {
  const generatedPW1 = generatePW();
  const generatedPW2 = generatePW();
  generatedPw1Element.textContent = generatedPW1;
  generatedPw2Element.textContent = generatedPW2;
}

function generatePW() {
  let password = "";
  for (let i = 0; i < 16; i++) {
    const randCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    password += randCharacter;
  }
  return password;
}

function copyToClipboard1() {
  const copyPW1 = generatedPw1Element.textContent;
  navigator.clipboard.writeText(copyPW1).then(() => {
    alert("Copied to clipboard");
  });
}
function copyToClipboard2() {
  const copyPW2 = generatedPw2Element.textContent;
  navigator.clipboard.writeText(copyPW2).then(() => {
    alert("Copied to clipboard");
  });
}
