// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  let words = string.split(' ');
  return words;
}
/** Source: link https://pt.stackoverflow.com/questions/268950/como-armazenar-palavras-de-um-texto-em-um-array/268964#268964 */

// Desafio 4
function concatName(arrayStrings) {
  let stringLastFirst = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return stringLastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = wins * 3 + ties;  
  return score;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higher = arrayNumbers[0];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] >= higher) {
      higher = arrayNumbers[i];
    }
  }
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (higher === arrayNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let hunter = '';
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    hunter = 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    hunter = 'cat2';
  } else {
    hunter = 'os gatos trombam e o rato foge';
  }
  return hunter;
}
/** ref: link https://www.w3schools.com/js/js_math.asp */

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let divisibleArray = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if ((arrayNumbers[i] % 3 === 0) && (arrayNumbers[i] % 5 === 0)) {
      divisibleArray.push('fizzBuzz');
    } else if ((arrayNumbers[i] % 3 !== 0) && (arrayNumbers[i] % 5 !== 0) ) {
      divisibleArray.push('bug!');
    } else if (arrayNumbers[i] % 3 === 0) {
      divisibleArray.push('fizz');
    } else if (arrayNumbers[i] % 5 === 0) {
      divisibleArray.push('buzz');
    } 
  }
  return divisibleArray;
}

// Desafio 9
function encode(stringLetters) {
  let numbers = '';
  for (let i = 0; i < stringLetters.length; i += 1) {
    if (stringLetters[i] === 'a') {
      numbers += '1';
    } else if (stringLetters[i] === 'e') {
      numbers += '2';
    } else if (stringLetters[i] === 'i') {
      numbers += '3';
    } else if (stringLetters[i] === 'o') {
      numbers += '4';
    } else if (stringLetters[i] === 'u') {
      numbers += '5';
    } else {
      numbers += stringLetters[i];
    }
  }
  return numbers;
}
function decode(stringNumbers) {
  let vowels = '';
  for (let i = 0; i < stringNumbers.length; i += 1) {
    if (stringNumbers[i] === '1') {
      vowels += 'a';
    } else if (stringNumbers[i] === '2') {
      vowels += 'e';
    } else if (stringNumbers[i] === '3') {
      vowels += 'i';
    } else if (stringNumbers[i] === '4') {
      vowels += 'o';
    } else if (stringNumbers[i] === '5') {
      vowels += 'u';
    } else {
      vowels += stringNumbers[i];
    }
  }
  return vowels;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
