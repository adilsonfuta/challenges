import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Content, Header, WelcomeMessage,
} from './index.styles';
import HeroGirl from '../../common/animations/HeroGirl';
import Input from '../../common/styled/Input';
import Button from '../../common/styled/Button';

import * as Auth from '../../services/AuthService';

function Landing(): React.ReactElement {
  const history = useHistory();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    const response = await Auth.signIn(login, password);

    if (response.error) return;

    history.push('/dashboard');
  };

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
          <Button label="Login" onClick={handleLogin} />
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
