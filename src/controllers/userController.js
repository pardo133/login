import { registerUser } from '../services/userService.js';

export const register = async (req, res) => {
    
    const result = await registerUser(req.body);
    
    
    return res.status(result.status).json(result);
};