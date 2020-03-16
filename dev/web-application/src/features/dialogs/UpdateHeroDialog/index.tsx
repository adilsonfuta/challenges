/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Container, Header, Content } from './index.styles';
import Input from '../../../common/styled/Input';
import Button from '../../../common/styled/Button';
import { HeroState } from '../../../store/hero/types';
import DialogComponent, { SubmitOpts, Dialog } from '../../../components/Dialog';

interface CreateHeroProps {
  data: HeroState;
  onSubmit: (data: HeroState, opts?: SubmitOpts) => void;
}

type Props = CreateHeroProps & Dialog;


function UpdateHeroDialog({
  data, onSubmit, visible, onVisibleChange,
}:Props): React.ReactElement {
  const [name, setName] = useState<string>(data.name);
  const [classe, setClasse] = useState<string>(data.class);
  const [lat, setLat] = useState<number>(data.lat);
  const [lng, setLng] = useState<number>(data.lng);

  useEffect(() => {
    setName(data.name);
    setClasse(data.class);
    setLat(data.lat);
    setLng(data.lng);
  }, [data]);


  const handleSubmit = () => {
    onSubmit({
      name, class: classe, lat, lng, _id: data._id,
    });
  };
  return (
    <DialogComponent visible={visible} onVisibleChange={onVisibleChange}>
      <Container>
        <Header>
          <h2>
            Edite o herói! Basta modificar os dados e salvar.
          </h2>
        </Header>
        <Content>
          <Input label="Insira o nome do herói" value={name} onChange={setName} />
          <Input label="Insira a classe do herói" value={classe} onChange={setClasse} />
          <Input label="Insira a localização do herói (Latitude)" value={lat} onChange={setLat} />
          <Input label="Insira a localização do herói (Longitude)" value={lng} onChange={setLng} />
          <Button label="Salvar" onClick={handleSubmit} styledObject={{ width: '96%' }} />
        </Content>
      </Container>
    </DialogComponent>

  );
}

export default UpdateHeroDialog;
