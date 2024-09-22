import React, { useState } from 'react';
import '../styles/login.css';

const login = () => {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar el email al backend
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Almacenar el token en localStorage
      localStorage.setItem('token', data.token);
      alert(`Inicio de sesión exitoso, Bienvenido ${data.user.name}!`);
      window.location.href = '/consulta'; 
    } else {
      alert(data.msg);
    }
  };

  return (
    <div id='loginPrincipal'>
      <section id='sectionLogin'>
        <h1 id='h1Login'>Inicio de Sesión (+MongoDB)</h1>
      </section>
      <form id='formLogin' onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email" id='labelLogin'>Correo:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" id='labelLogin'>Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div id='divBotonLogin'>
          <button id='buttonLogin' type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default login;
