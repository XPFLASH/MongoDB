import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const loginUser = async (req, res) => {
  const { email, password } = req.body; 

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'El correo ingresado, no se encuentra registrado' });
    }

    if (password !== user.password) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};
