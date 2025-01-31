import api from "./api";
import handleRequest from '../utils/handleRequest';
import { constants } from "../constants/env";

export const login = async (credentials) => {
  return handleRequest(() => api.post('/login', { ...credentials }));
}


export const register = async (username, email, password) => {
  return handleRequest(() => api.post('/usuarios', { usuario: username, correo: email, contrasena: password, id_privilegios: constants.privileges.user }));
}

export const logout = async (token) => {
  return handleRequest(() => api.post('/logout', { token }));
}

export const getInfo = async (user) => {
  return handleRequest(() => api.get('/me', { usuario: user }));
}
