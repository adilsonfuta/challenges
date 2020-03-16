/* eslint-disable no-underscore-dangle */

import api from '.';
import { HeroState } from '../store/hero/types';

export async function list() {
  const response = await api.get('heroes');
  return response.data;
}


export async function find(id: string) {
  try {
    const response = await api.get(`heroes/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function create(hero: HeroState) {
  try {
    const response = await api.post('heroes', {
      ...hero,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function update(hero: HeroState) {
  try {
    const response = await api.put(`heroes/${hero._id}`, {
      ...hero,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}


export async function remove(id?: string) {
  try {
    const response = await api.delete(`heroes/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}
