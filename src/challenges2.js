// Desafio 10
function techList(arrayTech, name) {
  let eachTech = [];
  for (let index in arrayTech.sort()) {
    eachTech.push(
      {
        tech: arrayTech[index],
        name: name
      },
    )
  }

  let result = '';
  if (arrayTech.length === 0){
    result = 'Vazio!';
  } else {
    result = eachTech;
  }

return result;
}
/** ref: https://www.w3schools.com/js/js_loop_forin.asp */
/** Resolução com base na idéia da thread do Gabriel Pires - Turma 19 - Tribo A link Source: https://trybecourse.slack.com/archives/C02L83FCV4K/p1638493587205500 */

// Desafio 11
function generatePhoneNumber(arrayEleven) {
  let result = '';
  let telephone = '(' + arrayEleven[0] + arrayEleven[1] + ')' + ' ' + arrayEleven[2] + arrayEleven[3] + arrayEleven[4] + arrayEleven[5] + arrayEleven[6] + '-' + arrayEleven[7] + arrayEleven[8] + arrayEleven[9] + arrayEleven[10];
  
  if (arrayEleven.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  
  for (let i = 0; i < arrayEleven.length; i += 1) {
    if (arrayEleven[i] < 0) {
      result = "não é possível gerar um número de telefone com esses valores";
    } else if (arrayEleven[i] > 9) {
      result =  "não é possível gerar um número de telefone com esses valores";
    } 
  }
   
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    let count9 = 0;

  for (let i = 0; i < arrayEleven.length; i += 1) {
    if(arrayEleven[i] === 0) {
      count += 1;
    } else if (arrayEleven[i] === 1) {
      count1 += 1;
    } else if (arrayEleven[i] === 2) {
      count2 += 1;
    } else if (arrayEleven[i] === 3) {
      count3 += 1;
    } else if (arrayEleven[i] === 4) {
      count4 += 1;
    } else if (arrayEleven[i] === 5) {
      count5 += 1;
    } else if (arrayEleven[i] === 6) {
      count6 += 1;
    } else if (arrayEleven[i] === 7) {
      count7 += 1;
    } else if (arrayEleven[i] === 8) {
      count8 += 1;
    } else if (arrayEleven[i] === 9) {
      count9 += 1;
    }
  }

  let arrayNumbers =[count, count1, count2, count3, count4, count5, count6, count7, count8, count9];
  for (let quantity of arrayNumbers) {
    if (quantity >= 3) {
    result = "não é possível gerar um número de telefone com esses valores";
    }
  }

  if(result !== "não é possível gerar um número de telefone com esses valores") {
    result = telephone;
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if(lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if(lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
