import express from 'express';
import { register } from '../controllers/userController.js';

const router = express.Router();


router.post('/login', (req, res) => {
  res.json({ message: 'Ruta de login funcionando', status: 'ok' });
});


router.post('/register', register);

export default router;
