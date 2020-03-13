import { create, ApisauceInstance } from 'apisauce';

const api:ApisauceInstance = create({
  baseURL: 'http://localhost:3131/',
});

api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});


api.addAsyncRequestTransform(async (request) => {
  const token = await localStorage.getItem('@ZRPHeroes:token');

  if (token) { request.headers.Authorization = `Bearer ${token}`; }
});

export default api;
