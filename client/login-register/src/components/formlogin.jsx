import React from 'react'
import Input from './input'
import "../styles/App.css"

export default function FormLogin() {
    return (

            <form>
                <h1 id="TituloLogin">Logar</h1>
                <Input type = "Email" name = "Email" text = "Email" id = "email"></Input>
                <Input type = "password" name = "Senha" text = "Senha" id = "senha"></Input>
                 <button type ="submit"> Entrar</button>
                <h5><a href="cadastro.html">Cadastrar</a></h5>
            </form>
    
    )
}