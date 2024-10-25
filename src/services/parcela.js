
import api from "./api";
import handleRequest from '../utils/handleRequest';

export const createParcela = async (parcelaData) => {
  return handleRequest(() => api.post('api/parcelas', parcelaData));
};

export const getAllParcelas = async () => {
  return handleRequest(() => api.get('api/parcelas'));
};

export const getParcelaById = async (id) => {
  return handleRequest(() => api.get(`api/parcelas/${id}`));
};

export const updateParcela = async (id, parcelaData) => {
  return handleRequest(() => api.put(`api/parcelas/${id}`, parcelaData));
};

export const deleteParcela = async (id) => {
  return handleRequest(() => api.delete(`api/parcelas/${id}`));
};
;
