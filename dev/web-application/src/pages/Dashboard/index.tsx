import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import Heroes from './Heroes';
import Alert from '../../components/Alert';
import { ApplicationState } from '../../store';
import { List } from '../../store/hero/actions';
import { IconsPath } from '../../constants/path';
import {
  Container, Header, Tab, Content,
} from './index.styles';

function Dashboard(): React.ReactElement {
  const { user, heroes } = useSelector((state:ApplicationState) => state);
  const dispatch = useDispatch();

  const [option, setOption] = useState<number>(1);
  const [alertMessage, setAlertMessage] = useState<string>('');

  useEffect(() => {
    const socket = io('https://zrp-challenge-socket.herokuapp.com:443');

    socket.on('occurrence', (data:any) => {
      const { monsterName } = data;
      setAlertMessage(`Uma ameaça chamada ${monsterName} foi detectada.`);
    });

    dispatch(List());
  }, [dispatch]);


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
          <span>{user.name}</span>
        </div>
      </Header>
      <Content>
        {option === 1 && (<Heroes data={heroes} />)}
      </Content>
    </Container>
  );
}


export default Dashboard;
