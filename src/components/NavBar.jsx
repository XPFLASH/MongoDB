import React from 'react'
import '../styles/navbar.css'
import { FaHome, FaList, FaPaperPlane, FaPenSquare, FaUsers } from "react-icons/fa";

const NavBar = () => {
  return (
    <div id='divPrincipal'>
        <div id='logoDash'>
        <img src="/src/assets/mongodb2.png" alt="Descripción de la imagen" />

        </div>
        <nav>
            
            <ul> 
                <li id='linav'> <FaHome/>  Inicio</li>
                <li id='linav'> <FaPenSquare/> Registro</li>
                <li id='linav'> <FaList/> Consultar Datos</li>
                <li id='linav'> <FaPaperPlane/>Contactanos</li>
                <li id='linav'> <FaUsers/>Sobre nosotros</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar