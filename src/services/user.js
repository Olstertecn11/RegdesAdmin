
import api from "./api";
import handleRequest from '../utils/handleRequest';

export const getUsers = async () => {
  return handleRequest(() => api.get('/usuarios'));
}


export const createUser = async (username, email, password, privileges) => {
  return handleRequest(() => api.post('/usuarios', { usuario: username, correo: email, contrasena: password, id_privilegios: privileges }));
}

export const deleteUser = async (id) => {
  return handleRequest(() => api.delete(`/usuarios/${id}`));
}


