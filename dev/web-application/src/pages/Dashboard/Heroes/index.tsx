/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Header } from './index.styles';
import Table from '../../../components/Table';
import CreateHero from '../../../features/dialogs/CreateHeroDialog';
import UpdateHero from '../../../features/dialogs/UpdateHeroDialog';
import Button from '../../../common/styled/Button';
import { HeroState } from '../../../store/hero/types';
import { Create, Update, Remove } from '../../../store/hero/actions';
import { header } from './table.def';

interface Props {
  data: HeroState[]
}

function Heroes({ data = [] }:Props): React.ReactElement {
  const dispatch = useDispatch();

  const [visibleCreateHero, setVisibleCreateHero] = useState<boolean>(false);
  const [visibleUpdateHero, setVisibleUpdateHero] = useState<boolean>(false);
  const [currentHero, setHero] = useState<HeroState>();

  const handleCreate = () => {
    setVisibleCreateHero(true);
  };

  const handleSubmitCreate = (hero:HeroState) => {
    dispatch(Create(hero));
    setVisibleCreateHero(false);
  };

  const handleSubmitDelete = (hero: object) => {
    dispatch(Remove((hero as HeroState)._id));
  };

  const handleUpdate = (hero: object) => {
    setHero((hero as HeroState));
    setVisibleUpdateHero(true);
  };

  const handleSubmitUpdate = (hero: object) => {
    dispatch(Update({ ...(hero as HeroState) }));
    setVisibleUpdateHero(false);
  };

  return (
    <Container>
      <Header>
        <h1>Heróis</h1>
        <Button
          label="Adicionar novo herói"
          onClick={handleCreate}
          styledObject={{
            width: '190px', background: '#FFF', borderColor: '#3B2B5B', color: '#3B2B5B',
          }}
        />
      </Header>
      <Table
        header={header}
        data={data}
        keyReference="id"
        onEdit={handleUpdate}
        onDelete={handleSubmitDelete}
      />
      <CreateHero
        visible={visibleCreateHero}
        onVisibleChange={setVisibleCreateHero}
        onSubmit={handleSubmitCreate}
      />
      {currentHero && (
      <UpdateHero
        visible={visibleUpdateHero}
        onVisibleChange={setVisibleUpdateHero}
        data={currentHero}
        onSubmit={handleSubmitUpdate}
      />
      )}
    </Container>
  );
}


export default Heroes;
