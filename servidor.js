const express = require("express");

const app = express();

let alunos = [
    {id: 1, nome: "Malu", curso: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Camily", curso: "Redes de computadores"},
    {id: 3, nome: "Kaue", curso: "Banco de dados"},
    {id: 4, nome: "Rian", curso: "Administração"},
    {id: 5, nome: "Manu", curso: "Desenvolvimento de Sistemas"},
]
app.get("/", (req, res) => {
  res.json({
    message: "API Alunos funcionando"
  });
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso.");
    console.log(`http://localhost:${PORTA}`);
})