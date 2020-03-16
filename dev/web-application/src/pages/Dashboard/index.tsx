import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import Heroes from './Heroes';
import Battles from './Battles';
import Alert from '../../components/Alert';
import { ApplicationState } from '../../store';
import { IconsPath } from '../../constants/path';
import {
  Container, Header, Tab, Content,
} from './index.styles';

function Dashboard(): React.ReactElement {
  const { user } = useSelector((state:ApplicationState) => state);

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
      <Alert message={alertMessage} type="error" resetMessage={setAlertMessage} />
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
          <span>{user.name}</span>
        </div>
      </Header>
      <Content>
        {option === 1 && (<Heroes />)}
        {option === 2 && (<Battles />)}
      </Content>
    </Container>
  );
}


export default Dashboard;
