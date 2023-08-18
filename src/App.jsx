import { useState } from 'react'
import Card from "./Card";
import './App.css'

function App() {
  const[plantilla, setPlantilla] = useState([])
  const[nombre, setNombre] = useState("")
  const[banda, setBanda] = useState("")
  const[validacion, setValidacion] = useState(false)

  /*const addUsuario = (usuario) =>{
    setPlantilla([...plantilla, usuario]);
  }*/
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(nombre.trim() === "" || nombre.length <= 3 || banda.length < 6){
      alert("Por favor chequea que la información sea correcta")
    }else{
      /*addUsuario({nombre, banda});*/
      setValidacion(true);
    }
  }

  return (
    <>
      <div className='App'>
        <h1>¿Cual es tu banda favorita?</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <br></br>
        <input type="text" placeholder='Ingrese su banda favorita' value={banda} onChange={(e) => setBanda(e.target.value)}/>
        <br></br>
        <button type="submit">Submit</button>
        </form>
        {validacion && <Card nombre={nombre} banda={banda}/>}
      </div>
    </>
  )
}

export default App
