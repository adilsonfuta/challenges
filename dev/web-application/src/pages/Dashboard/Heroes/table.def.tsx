import React from 'react';
import { Header } from '../../../components/Table/index.types';
import { Status } from './index.styles';

export const header: Header[] = [
  {
    name: 'Status',
    ref: 'allocated',
    render(allocated: boolean) {
      return (<Status status={allocated} />);
    },
  },
  {
    name: 'Nome',
    ref: 'name',
  },
  {
    name: 'Classe',
    ref: 'class',
  },
  {
    name: 'Latitude',
    ref: 'lat',
  },
  {
    name: 'Longitude',
    ref: 'lng',
  },

];
