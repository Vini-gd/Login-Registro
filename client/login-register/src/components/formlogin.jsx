import React from 'react'
import Input from './input'
import "../styles/App.css"

export default function FormLogin() {
    return (
        <div class="principal">
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Email" id="nome"></input> <br></br><br></br>
                <input type="password" placeholder="Senha" id="password"></input> <br></br><br></br>
                <button type="submit">Enviar</button>
            </form> <br></br><br></br>
            <a href="cadastro.html">Cadastro</a>
        </div>

        
    )
}