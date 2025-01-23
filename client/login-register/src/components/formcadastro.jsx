import React from 'react'
import Input from './input'
import "../styles/App.css"

export default function FormCadastro() {
    return (
        <div class="principal">
            <form>
                <h1>Cadastro</h1>
                <input type="text" placeholder="Email" id="nome"></input> <br></br><br></br>
                <input type="password" placeholder="Senha" id="password"></input> <br></br><br></br>
                <input type="password" placeholder="Confirmar Senha" id="password"></input> <br></br><br></br>
                <button type="submit">Cadastrar</button>
            </form> <br></br> <br></br>
            <a href="login.html">Logar</a>
        </div>
    )
}