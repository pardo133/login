import express from 'express';
import userRoutes from './src/routes/user.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas de usuario
app.use('/api/users', userRoutes);

app.get('/test', (req, res) => {
  res.json({ message: 'API is working', status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
