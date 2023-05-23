import { useState } from "react";
import"./Campo.css"
const Campo =(props) =>{
    const [valor, actualizarValor]= useState ("")
    console.log("Datos:", props);//Props: sondatos que se le pueden enviar a nuestros componentes y de acuerdo a eso hacerlos actuar de alguna forma
    const placeholderModificado =`${props.placeholder}...`

    //destructuracion
    const{type= "text"}=props

    const manejarCambio  = (e)=>{
        console.log("cambio", e.target.value);
        props.actualizarValor(e.target.value)
    }
    // al ponerlo de esta forma `campo campo-${type}` el programa escoge entre los tipos de campo que existen ya sea -texto o -color
    return<div className={`campo campo-${type}`}>
        
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} required ={props.required} value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo