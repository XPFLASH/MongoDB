import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './pages/registro';
import Consulta from './pages/consulta';
import Login from './pages/login';
import Logout from './pages/logout.jsx';
import PrivateRoute from './utils/privateRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={(
          <div id='home'>
            <header>
              <h1 id='h1Home'>Dashboard con integración de MongoDB</h1>
            </header>
            <section id='sectionHome'>
              <h3>¿Qué es MongoDB en la nube?</h3>
              <p>MongoDB Atlas es la versión gestionada de MongoDB que opera en la nube, lo que significa que elimina la necesidad de gestionar servidores, 
                actualizaciones o configuraciones manuales. Esto permite a los desarrolladores concentrarse en crear aplicaciones sin preocuparse por la 
                infraestructura subyacente.</p>
              <h3>Beneficios de usar MongoDB en la nube</h3>
              <ol>
                <li><strong>Escalabilidad:</strong> MongoDB se escala automáticamente a medida que aumentan los volúmenes de datos.</li>
                <li><strong>Alta disponibilidad:</strong> Con réplicas automáticas, garantiza que tu aplicación esté siempre disponible.</li>
                <li><strong>Seguridad avanzada:</strong> MongoDB en la nube ofrece cifrado de extremo a extremo y controles de acceso basados en roles.</li>
                <li><strong>Monitoreo y alertas:</strong> Proporciona herramientas para monitorear el rendimiento de la base de datos y recibir alertas de uso.</li>
              </ol>
            </section>
          </div>
        )} />
        <Route path="/registro" element={ <PrivateRoute><Registro /></PrivateRoute> }/>
        <Route path="/consulta" element={ <PrivateRoute><Consulta /></PrivateRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  </StrictMode>,
);
