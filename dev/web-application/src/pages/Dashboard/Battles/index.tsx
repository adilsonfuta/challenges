/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Header, Content, Item,
} from './index.styles';
import { ApplicationState } from '../../../store';
import { List } from '../../../store/battle/actions';

function Battles(): React.ReactElement {
  const dispatch = useDispatch();

  const { battles } = useSelector((state:ApplicationState) => state);
  useEffect(() => {
    dispatch(List());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <h1>Histórico de Batalhas</h1>
      </Header>
      <Content>
        {battles.length === 0
          ? (
            <>
              <h2>Nenhuma batalha para exibir</h2>
            </>
          )
          : (
            <>
              {battles.map((battle, i) => (
                <Item key={i}>
                  <span>{battle.occurence.name}</span>
                  <span>{battle.hero.name}</span>
                  <span>{battle.createdAt}</span>
                </Item>
              ))}
            </>
          )}
      </Content>
    </Container>
  );
}

export default Battles;
