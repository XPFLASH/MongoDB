import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import dbConnect from './config/dbConnect.js';
import userRoutes from './routes/userRoutes.js';
import authRoute from './routes/authRoute.js'

// Cargar variables de entorno
dotenv.config();

// Inicializa la conexión a la base de datos
dbConnect();

// Inicializa la aplicación de Express
const app = express();

// Middleware
app.use(cors());  // Permite solicitudes entre diferentes dominios (CORS)
app.use(express.json());  // Para manejar solicitudes con cuerpos JSON

// Rutas
app.use('/api/users', userRoutes);  

// Definir las rutas de autenticación
app.use('/api/auth', authRoute);  // Ruta base /api/auth

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Configura el puerto para el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
