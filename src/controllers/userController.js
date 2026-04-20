import { registerUser } from '../services/userService.js';

export const register = async (req, res) => {
    try {
        // 1. Extraemos los datos del body que enviamos desde Postman
        const { email, password } = req.body;

        // 2. Validación básica para evitar el error de "undefined"
        if (!email || !password) {
            return res.status(400).json({ message: "Email y password son obligatorios" });
        }

        // 3. Llamamos al servicio (asegúrate de que el nombre coincida con tu import)
        const result = await registerUser(req.body); 
        
        // 4. Respondemos a Postman
        res.json(result);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};