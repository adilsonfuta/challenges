import api from '.';

export async function list() {
  try {
    const response = await api.get('heros');
    return response.data;
  } catch (err) {
    return err.data;
  }
}


export async function find(id: string) {
  try {
    const response = await api.get(`heros/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function create(user: any) {
  try {
    const response = await api.post('heros', {
      ...user,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function update(user: any) {
  try {
    const response = await api.put('heros', {
      ...user,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}


export async function remove(id: string) {
  try {
    const response = await api.delete(`heros/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}
