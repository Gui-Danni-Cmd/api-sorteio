const connection = require("./connection");

async function getAll() {
  const buscaNumero = await connection.execute("SELECT * FROM valores");
  return buscaNumero[0];
}

module.exports = { getAll };
