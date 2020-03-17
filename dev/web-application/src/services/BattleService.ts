import api from '.';
import { Occurence } from '../store/battle/types';

export async function list() {
  try {
    const response = await api.get('battles');
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function start(occurence:Occurence) {
  try {
    const response = await api.post('battles', {
      occurence,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}
