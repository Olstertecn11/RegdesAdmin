import api from "./api";
import handleRequest from '../utils/handleRequest';


export const getChurchs = async () => {
  return handleRequest(() => api.get('/iglesia'));
}

export const addChurch = async (church) => {
  return handleRequest(() => api.post('/iglesia', church));
}

export const getInfo = async (user) => {
  return handleRequest(() => api.get('/me', { usuario: user }));
}
