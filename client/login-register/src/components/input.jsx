import React from 'react';

export default function Input({name, text, type, id}) {
    return (
        <>
            <label htmlFor= {name}>{text}</label>
            <input type={type} id={id} class="input"></input>
            <br>
            </br>
        </>
    )
}