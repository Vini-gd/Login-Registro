import React, { useState } from 'react'
import Input from './input'
import "../styles/App.css"
import Axios from 'axios'

export default function FormCadastro() {
    const [email, setEmail] = useState('');
    const [userName, setName] = useState('');
    const [password, setPassword] = useState('');

    const createUsuer = () => {
        Axios.post('https://localhost:3002/register', {
           Email: email,
           Senha: senha
        }).then(() => {
            console.log('Usuário foi criado')
        })
    }

    return (
        <div class="principal">
            <form>
                <h1>Cadastro</h1>


                <input type="text" placeholder="Email" id="nome" onChange={(event) => {
                    setEmail(event.target.value)
                }}>
               
                </input> <br></br><br></br>
                <input type="password" placeholder="Senha" id="password" onChange={(event) => {
                    setPassword(event.target.value)
                }}>
                
                </input> <br></br><br></br>
                <input type="password" placeholder="Confirmar Senha" id="password"></input> <br></br><br></br>
                <button type="submit" onClick={createUsuer}>Cadastrar</button>
            </form> <br></br> <br></br>
            <a href="login.html">Logar</a>
        </div>

        
        
    )
}