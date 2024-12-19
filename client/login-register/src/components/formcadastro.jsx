import React from 'react'
import Input from './input'
import "../styles/App.css"

export default function FormCadastro() {
    return (

            <form>
                <h1 id="TituloLogin">Cadastrar</h1>
                <Input type = "Email" name = "Email" text = "Email" id = "email"></Input>
                <Input type = "password" name = "Senha" text = "Senha" id = "senha"></Input>
                <Input type = "password" name = "Senha" text = "Confirme Senha" id = "senha"></Input>
                 <button type ="submit"> Cadastrar</button>
                <h5><a href="login.html">Voltar?</a></h5>

            </form>
    
    )
}