import React from 'react'
import '../styles/consulta.css';
import TarjetaUsuarios from '../components/TarjetaUsuarios';

const consulta = () => {
  return (
    <div id='consulta'>
        <h1 id='h1Consulta'>Consulta de Registro (+MongoDB)</h1>
        <TarjetaUsuarios/>
    </div>
  )
}

export default consulta