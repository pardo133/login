import express from 'express';
import { register } from '../controllers/userController.js';

const router = express.Router();

// Ruta para login
router.post('/login', (req, res) => {
  res.json({ message: 'Ruta de login funcionando', status: 'ok' });
});

// Ruta para registro
router.post('/register', register);

export default router;
