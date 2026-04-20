import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
const saltRounds = 10

export const registerUser = async (userData) => {
    try {
        const { password } = userData;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, saltRounds);

        const nuevoUsuario = new User({
            ...userData,
            password: hashedPass
        });

        await nuevoUsuario.save();

       
        return {
            status: 201,
            message: "usuario guardado"
        };

    } catch (e) {
        console.log(e);
        return {
            status: 409,
            message: "usuario NO guardado"
        };
    }
};