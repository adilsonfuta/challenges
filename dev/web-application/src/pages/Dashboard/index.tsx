import React, { useState } from 'react';
import { IconsPath } from '../../constants/path';
import Heroes from './Heroes';
import {
  Container, Header, Tab, Content,
} from './index.styles';

function Dashboard(): React.ReactElement {
  const [option, setOption] = useState<number>(1);

  const selectOption = (op:number):void => {
    setOption(op);
  };
  return (
    <Container>
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
