import React from 'react'
import '../styles/navbar.css'
import { FaHome, FaList, FaPaperPlane, FaPenSquare, FaSign, FaSignInAlt, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id='divPrincipal'>
        <div id='logoDash'>
        <img src="/src/assets/mongodb2.png" alt="Descripción de la imagen" />

        </div>
        <nav>
            <ul> 
                <Link to="/"><li id='linav'><FaHome/> Inicio</li></Link>
                <Link to="/login"><li id='linav'><FaSignInAlt/> Iniciar Sesión</li></Link>
                <Link to ="/registro"><li id='linav'> <FaPenSquare/> Registro</li></Link>
                <Link to ="/consulta"><li id='linav'> <FaList/> Consultar Datos</li></Link>
                <li id='linav'> <FaPaperPlane/>Contactanos</li>
                <li id='linav'> <FaUsers/>Sobre nosotros</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar