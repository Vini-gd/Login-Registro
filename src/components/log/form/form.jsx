import React from 'react'
import Email from '../email'
import Input from '../form/input'
import '../form/App.css'



export default function Form() {
    return (

            <form>
                <h1 id="TituloCadastro">Cadastrar</h1>
                <Input type = "Email" name = "Email" text = "Email" id = "email"></Input>
                <Input type = "password" name = "Senha" text = "Senha" id = "senha"></Input>
                <Input type = "password" name ="Comfirme Senha" text = "Confirme Senha" id = "confirmesenha"></Input>
                <button type ="submit"> Cadastrar</button>
                <h5><a href="indexLogin.html">Login?</a></h5>
      
            </form>
    
    )
}