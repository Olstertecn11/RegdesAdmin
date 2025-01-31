import api from "./api";
import handleRequest from '../utils/handleRequest';


export const getMisiones = async () => {
  return handleRequest(() => api.get('/mision'));
}

export const addMision = async (mision) => {
  return handleRequest(() => api.post('/mision', mision));
}


export const deleteMision = async (id) => {
  return handleRequest(() => api.delete(`/mision/${id}`));
}
