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
/** ref: https://www.w3schools.com/js/js_loop_forin.asp*/
/** Resolução com base na idéia da thread do Gabriel Pires - Turma 19 - Tribo A link https://trybecourse.slack.com/archives/C02L83FCV4K/p1638493587205500 */

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
