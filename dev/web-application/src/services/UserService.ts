import api from '.';

export async function list() {
  try {
    const response = await api.get('users');
    return response.data;
  } catch (err) {
    return err.data;
  }
}


export async function find(id: string) {
  try {
    const response = await api.get(`users/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function create(user: any) {
  try {
    const response = await api.post('users', {
      ...user,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function update(user: any) {
  try {
    const response = await api.put('users', {
      ...user,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}


export async function remove(id: string) {
  try {
    const response = await api.delete(`users/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}
