import React from 'react';
import { Header } from '../../../components/Table/index.types';
import { Allocated } from './index.styles';

export const header: Header[] = [
  {
    name: 'Alocado',
    ref: 'allocated',
    render(allocated: boolean) {
      return (<Allocated status={allocated} />);
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
