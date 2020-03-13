import React from 'react';
import * as S from './index.styles';

import { Header } from './index.types';

interface Props {
  header: Header[];
  data: object[];
  keyReference: string;
  onRowClick?: (data: object) => void;
}


function Table({
  header, data, keyReference, onRowClick,
}:Props): React.ReactElement {
  const empty = data.length === 0;

  const handleRowClick = (row: object) => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  return (
    <S.Table empty={empty}>
      <tbody>
        <S.HeaderRow>
          {header.map((head:Header) => {
            const { name } = head;

            return (
              <S.Head key={name}>
                <S.CellContents>
                  {name}
                </S.CellContents>
              </S.Head>
            );
          })}
        </S.HeaderRow>


        {data.map((value) => {
          const onClick = () => {
            handleRowClick(value);
          };

          const clickable = !!onRowClick;
          const key = (value as any)[keyReference];
          return (
            <S.Row onClick={onClick} key={key} clickable={clickable}>
              {header.map(({ ref, render }) => {
                const content = (value as any)[ref];
                return (
                  <S.Cell>
                    {render
                      ? render(content)
                      : <S.CellContents>{content}</S.CellContents>}
                  </S.Cell>
                );
              })}
            </S.Row>
          );
        })}
      </tbody>
    </S.Table>
  );
}

export default Table;
