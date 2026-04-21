import jwt from 'jsonwebtoken';

export const createToken = (userData) => {
    
    const secret = process.env.JWT_SECRET; 
    const token = jwt.sign(userData, secret, { expiresIn: '1h' });
    
    return token;
};