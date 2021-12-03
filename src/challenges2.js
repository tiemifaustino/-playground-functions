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
  let telephone = '';
   
  telephone = '(' + arrayEleven[0] + arrayEleven[1] + ')' + ' ' + arrayEleven[2] + arrayEleven[3] + arrayEleven[4] + arrayEleven[5] + arrayEleven[6] + '-' + arrayEleven[7] + arrayEleven[8] + arrayEleven[9] + arrayEleven[10];
  

  return telephone;
}

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]));

// criar uma variavel para retornar o numero de telefone
// fazer uma repeticao para percorrer no array dos numeros
// fazer uma concatenação, Parentese, numero[0], numero[1], parentese, espaço, numero[23456], traço, numero [7891]
// condicao: se for tamanho diferente de 11 retornar string 'array com tamanho incorreto'
// condicoes: se for < 0, > 9, ou repita 3 vezes ou mais, retornar uma string 'nao é possivel gerar'  

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
