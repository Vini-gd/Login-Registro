//Dependências Banco De Dados

const express = require("express");
const app = express()
const mysql = require("mysql");
const cors = require("cors");

// Rodando o servidor
app.listen(3002, ()=> {
    console.log("O Servidor está rodando na porta 3002");
})