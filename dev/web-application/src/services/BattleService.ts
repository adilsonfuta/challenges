import api from '.';
import { Occurrence } from '../store/battle/types';

export async function list() {
  try {
    const response = await api.get('battles');
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function start(occurrence:Occurrence) {
  try {
    const response = await api.post('battles', {
      occurrence,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}
