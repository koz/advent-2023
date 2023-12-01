const fs = require('fs');
const path = require('path');

function trebuchet() {
  const input = fs.readFileSync(path.join(__dirname,'./input.txt'), 'utf8');
  const inputArray = input.split('\n');
  const parsedInput = inputArray.reduce((prevValue, str) => {
    const parsedValue = str.match(/^\D*(\d)(?:.*?(\d))?\D*$/);
    const firstDigit = parsedValue[1];
    const secondDigit = parsedValue[2] || firstDigit;
    if (firstDigit) {
      return prevValue + Number(`${firstDigit}${secondDigit}`);
    }
    return prevValue
  }, 0)
  console.log('parsedInput', parsedInput)
}

trebuchet()