import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Content, Header, WelcomeMessage,
} from './index.styles';
import HeroGirl from '../../common/animations/HeroGirl';
import Input from '../../common/styled/Input';
import Button from '../../common/styled/Button';
import Alert from '../../components/Alert';
import { Login } from '../../store/user/actions';
import { ApplicationState } from '../../store';

function Landing(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const { alert, user } = useSelector((state:ApplicationState) => state);

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');

  useEffect(() => {
    if (user.token) history.push('dashboard');
  }, [history, user]);

  useEffect(() => {
    if (alert.error) setAlertMessage(alert.message);
  }, [alert]);

  const handleLogin = () => {
    dispatch(Login(login, password));
  };

  return (
    <Container>
      <Alert message={alertMessage} type={alert.type} resetMessage={setAlertMessage} />
      <Header>
        <div className="logo">
          <h1>ZRP</h1>
          <span>Heroes</span>
        </div>
        <div className="login">
          <Input label="Login" type="text" value={login} onChange={setLogin} />
          <Input label="Senha" type="password" value={password} onChange={setPassword} />
          <Button label="Login" onClick={handleLogin} />
        </div>
      </Header>
      <Content>
        <WelcomeMessage>
          <h1>Bem vindo ao ZRP Heroes!</h1>
          <p>
            O ZRP Heroes é uma plataforma de gerenciamento e distribuição de heróis para
            combate de ameaças.Entre com suas credenciais e faça parte dessa batalha!
          </p>
        </WelcomeMessage>
        <HeroGirl />
      </Content>
    </Container>
  );
}

export default Landing;
