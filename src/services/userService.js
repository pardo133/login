import { createUser, findByEmail } from '../models/userModel.js';

export async function registerUser  (userData) {
  const user = await createUser(userData.email, userData.password);
  return user;
};
