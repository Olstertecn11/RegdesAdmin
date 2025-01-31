import api from "./api";
import handleRequest from '../utils/handleRequest';


export const getClases = async () => {
  return handleRequest(() => api.get('/clase'));
}

export const addClase = async (clase) => {
  return handleRequest(() => api.post('/clase', clase));
}

export const getInfo = async (user) => {
  return handleRequest(() => api.get('/clase', { usuario: user }));
}

export const deleteClase = async (id) => {
  return handleRequest(() => api.delete(`/clase/${id}`));
}

