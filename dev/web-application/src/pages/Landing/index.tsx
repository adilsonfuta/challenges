import React, { useState } from 'react';
import {
  Container, Content, Header, WelcomeMessage,
} from './index.styles';
import HeroGirl from '../../common/animations/HeroGirl';
import Input from '../../common/styled/Input';
import Button from '../../common/styled/Button';

function Landing(): React.ReactElement {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <Header>
        <div className="logo">
          <h1>ZRP</h1>
          <span>Heros</span>
        </div>
        <div className="login">
          <Input label="Login" type="text" value={login} onChange={setLogin} />
          <Input label="Senha" type="password" value={password} onChange={setPassword} />
          <Button label="Login" onClick={() => console.log('login')} />
        </div>
      </Header>
      <Content>
        <WelcomeMessage>
          <h1>Bem vindo ao ZRP Heros!</h1>
          <p>
            O ZRP Heros é uma plataforma de gerenciamento e distribuição de heróis para
            combate de ameaças.Entre com suas credenciais e faça parte dessa batalha!
          </p>
        </WelcomeMessage>
        <HeroGirl />
      </Content>
    </Container>
  );
}

export default Landing;
