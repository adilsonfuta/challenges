import React from 'react';
import { Container, Header } from './index.styles';
import Input from '../../common/styled/Input';
import Button from '../../common/styled/Button';

const Landing: React.SFC = () => (
  <Container>
    <Header>
      <div className="logo">
        <h1>ZRP</h1>
        <span>Heros</span>
      </div>
      <div className="login">
        <Input label="Login" value="" onChange={(value:string) => console.log(value)} />
        <Input label="Senha" value="" onChange={(value:string) => console.log(value)} />
        <Button label="Login" onClick={() => console.log('login')} />
      </div>
    </Header>
  </Container>
);

export default Landing;
