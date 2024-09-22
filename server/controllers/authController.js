// controllers/authController.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Login solo con email
export const loginUser = async (req, res) => {
  const { email } = req.body;

  try {
    // Buscar el usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'El correo ingresado, no se encuentra registrado' });
    }

    // Generar un token JWT
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Retornar el token al cliente
    res.json({ token, user: { email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};
