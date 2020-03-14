import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { IconsPath } from '../../constants/path';
import Heroes from './Heroes';
import Alert from '../../components/Alert';
import {
  Container, Header, Tab, Content,
} from './index.styles';

function Dashboard(): React.ReactElement {
  const [option, setOption] = useState<number>(1);
  const [alertMessage, setAlertMessage] = useState<string>('');

  useEffect(() => {
    const socket = io('https://zrp-challenge-socket.herokuapp.com:443');

    socket.on('occurrence', (data:any) => {
      const { monsterName } = data;
      setAlertMessage(`Uma ameaça chamada ${monsterName} foi detectada.`);
    });
  }, []);

  const selectOption = (op:number):void => {
    setOption(op);
  };
  return (
    <Container>
      <Alert message={alertMessage} type="error" />
      <Header>
        <div className="logo">
          <h1>ZRP</h1>
          <span>Heroes</span>
        </div>
        <Tab selected={option}>
          <button type="button" onClick={(e) => selectOption(1)}>Heróis</button>
          <button type="button" onClick={(e) => selectOption(2)}>Batalhas</button>
        </Tab>
        <div className="account">
          <img src={IconsPath.ACCOUNT} alt="" />
          <span>ZRPAdmin</span>
        </div>
      </Header>
      <Content>
        {option === 1 && (<Heroes />)}
      </Content>
    </Container>
  );
}


export default Dashboard;
