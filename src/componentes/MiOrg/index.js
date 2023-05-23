import { useState } from "react"
import "./MiOrg.css"
const MiOrg = ( props) =>{

    //ESTADO- HOOKS= Funcionalidades que nos ayudan a trabaja con el comportamiento de react
    //useState
    //Funcion useState() equivalente a un let
    //Como usar el estado
    //const [nombreVariable, funcionActulizar]=useState(valorInicial)
    /*const [mostrar,actualizarMostrar]=useState(true)
    const manejarClick = () =>{
        console.log("Mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/
    return <section className="orgSection">
        <h3 className="tittle">
            Mi organización
        </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>

}
export default MiOrg