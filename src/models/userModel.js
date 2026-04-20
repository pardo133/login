import { connectDB } from '../config/db.config.js';

export const createUser = async (email, password) => {
  const db = connectDB();
  return { id: 1, email, db };
};

export const findByEmail = async (email) => {
  return { id: 1, email, message: 'Usuario encontrado en prueba' };
};
