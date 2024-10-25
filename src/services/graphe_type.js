
import api from "./api";
import handleRequest from '../utils/handleRequest';

export const createTipoUva = async (tipoUvaData) => {
  return handleRequest(() => api.post('/api/tipos-uvas', tipoUvaData));
};

export const getAllTiposUvas = async () => {
  return handleRequest(() => api.get('/api/tipos-uvas'));
};

export const getTipoUvaById = async (id) => {
  return handleRequest(() => api.get(`/api/tipos-uvas/${id}`));
};

export const updateTipoUva = async (id, tipoUvaData) => {
  return handleRequest(() => api.put(`/api/tipos-uvas/${id}`, tipoUvaData));
};

export const deleteTipoUva = async (id) => {
  return handleRequest(() => api.delete(`/api/tipos-uvas/${id}`));
};

