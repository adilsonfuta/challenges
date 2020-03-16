import React, { useState } from 'react';
import { Container, Header, Content } from './index.styles';
import Input from '../../../common/styled/Input';
import Button from '../../../common/styled/Button';
import { HeroState } from '../../../store/hero/types';
import DialogComponent, { SubmitOpts, Dialog } from '../../../components/Dialog';

interface CreateHeroProps {
  onSubmit: (data: HeroState, opts?: SubmitOpts) => void;
}

type Props = CreateHeroProps & Dialog;


function CreateHeroDialog({ onSubmit, visible, onVisibleChange }:Props): React.ReactElement {
  const [name, setName] = useState<string>('');
  const [classe, setClasse] = useState<string>('');
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  const handleSubmit = () => {
    onSubmit({
      name, class: classe, lat, lng,
    });
  };
  return (
    <DialogComponent visible={visible} onVisibleChange={onVisibleChange}>
      <Container>
        <Header>
          <h2>
            Crie um novo herói! Basta preencher os dados.
          </h2>
        </Header>
        <Content>
          <Input label="Insira o nome do herói" value={name} onChange={setName} />
          <Input label="Insira a classe do herói" value={classe} onChange={setClasse} />
          <Input label="Insira a localização do herói (Latitude)" value={lat} onChange={setLat} />
          <Input label="Insira a localização do herói (Longitude)" value={lng} onChange={setLng} />
          <Button label="Cadastrar" onClick={handleSubmit} styledObject={{ width: '96%' }} />
        </Content>
      </Container>
    </DialogComponent>

  );
}

export default CreateHeroDialog;
