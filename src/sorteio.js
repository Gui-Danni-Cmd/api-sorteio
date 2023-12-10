const number = require("./models/numberAll");

/*
let horarioInit = new Date("2023-12-09T20:30:00");
let horarioEnd = new Date("2023-12-09T22:00:00");
*/
async function sortear(nome, valorTotal, valorInit, valorFinal) {
  const numberFinal = await number.getAll();
  let horaHoraAtual = new Date();
  let horarioInit = new Date("2023-12-10T20:00:00");
  let horarioEnd = new Date("2023-12-10T21:50:00");
  let value = [];
  if (horaHoraAtual < horarioEnd && horaHoraAtual > horarioInit) {
    for (let i = 1; i <= valorTotal; i++) {
      value.push(numberFinal[Math.floor(Math.random() * 10)].valor);
    }
  } else {
    for (let i = 1; i <= valorTotal; i++) {
      value.push(
        Math.floor(Math.random() * (valorFinal - valorInit + 1)) + valorInit
      );
    }
  }
  return await value;
}

module.exports = sortear;
