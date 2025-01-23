//Dependências Banco De Dados

const express = require("express");
const app = express()
const mysql = require("mysql");
const cors = require("cors");

// Rodando o servidor
app.listen(3002, ()=> {
    console.log("O Servidor está rodando na porta 3002");
})

//Banco de Dados
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'loginregistro'
})

app.post('/register', (req, res) => {
    // Variáveis do formulário
})