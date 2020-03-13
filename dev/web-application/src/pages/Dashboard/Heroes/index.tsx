import React, { useState } from 'react';
import { Container, Header } from './index.styles';
import Table from '../../../components/Table';
import Button from '../../../common/styled/Button';
import { header } from './table.def';

function Heroes(): React.ReactElement {
  return (
    <Container>
      <Header>
        <h1>Heróis</h1>
        <Button
          label="Adicionar novo herói"
          onClick={() => console.log('oloco')}
          styledObject={{
            width: '190px', background: '#FFF', borderColor: '#3B2B5B', color: '#3B2B5B',
          }}
        />
      </Header>
      <Table
        header={header}
        data={[{
          id: '1', name: 'teste', class: 'S', lat: 'lat', lng: 'asas',
        }]}
        keyReference="id"
      />
    </Container>
  );
}


export default Heroes;
