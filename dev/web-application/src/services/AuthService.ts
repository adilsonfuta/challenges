
import api from '.';

export async function signIn(login:string, password:string) {
  const response = await api.post('auth/login', {
    login,
    password,
  });
  return response.data;
}
