const fs = require("fs");
const path = require("path");

const numberWords = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function trebuchet() {
  const input = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf8");
  const inputArray = input.split("\n");

  const parsedInput = inputArray.reduce((prevValue, str) => {
    let firstDigit = null;
    let lastDigit = null;
    const strArray = str.split("");

    strArray.forEach((char, index) => {
      if (char.match(/\d/)) {
        if (firstDigit === null) {
          firstDigit = char;
        }
        lastDigit = char;
      } else {
        let matchingWord = Object.entries(numberWords).filter(
          ([word]) =>
            word.split("").findIndex((c, i) => c !== strArray[index + i]) === -1
        );
        if (matchingWord.length) {
          if (firstDigit === null) {
            firstDigit = matchingWord[0][1];
          }
          lastDigit = matchingWord[0][1];
        }
      }
    });

    if (firstDigit !== null) {
      return prevValue + Number(`${firstDigit}${lastDigit}`);
    }

    return prevValue;
  }, 0);
  console.log("parsedInput", parsedInput);
}

trebuchet();
