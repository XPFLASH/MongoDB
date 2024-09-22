import dbConnect from '../config/dbConnect.js';
import User from '../models/User.js';

export const createUser = async (req, res) => {
  const { name, age, email, phone, country} = req.body;

  try {
    
    const newUser = await User.create({
      name,
      age,
      email,
      phone,
      country
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
      const users = await User.find(); // Asegúrate de tener un modelo User
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios' });
    }
  };
