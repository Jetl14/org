import { useState } from 'react';
import{v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores]= useState([{
    id:uuid(),
    equipo:"Frontend",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto:"Instructor",
    fav:true
  },
  {
    id:uuid(),
    equipo:"Programación",
    foto:"https://github.com/genesysaluralatam.png",
    nombre:"Genesys Rondon",
    puesto:"Instructora",
    fav:false 
  }
]);
  const[equipos, actualizarEquipos]= useState([
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    }
    ,
    {
      id:uuid(),
      titulo:"Frontend",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }
    ,
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }
    ,
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id:uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id:uuid(),
      titulo:"Innovacion y gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Es como un if
  // condicion && seMuestra

  //Ambas maneras hacen lo mismo

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo Colaborador", colaborador)
    //Spread operator: crea una copia de los  valores actuales y luego se agrega el colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador=(id)=>{
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores= colaboradores.filter((colaborador)=> colaborador.id !==id)//si el id es diferente al que se dio click se guarda en el nuevo arreglo de colaboradores
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor =(color, id)=>{
    console.log("Actualizar:", color, id)
    const equiposActualizados= equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo=(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])//una copia de lo que tenga el valor que tenga equipos, luego le agrega un nuevo objetos que toma los datos que vienen en nuevo equipo 
  }

  const like=(id)=>{
    console.log("like", id)
    const colaboradoresActualizados =colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
    return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {/* mostrarFormulario === true ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario
         equipos={equipos.map((equipo)=>equipo.titulo)}
         registrarColaborador={registrarColaborador}
         crearEquipo={crearEquipo}
         /> }
      <MiOrg cambiarMostrar= {cambiarMostrar} />
      {
        //Recorrer arreglos con map: el cual recibe datos y regresa un nuevo arreglo
        equipos.map((equipo)=>
          //Siempre qeu se utilice map  hay que ponerle una key como referencia
           <Equipo datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador=> colaborador.equipo=== equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            />
        )
      }
      <Footer/> 
    </div>
  );
}

export default App;
