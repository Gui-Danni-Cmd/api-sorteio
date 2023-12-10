const express = require("express");
const cors = require("cors");
const sortear = require("./sorteio");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
let test = new Date();

app.post("/api/sorteo", async (req, res) => {
  const { nome, numSorteo, numInit, numEnd } = req.body;
  return res.send(
    JSON.stringify({ sorteio: await sortear(nome, numSorteo, numInit, numEnd) })
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} a ${test}`);
});
