import React from 'react';
import * as S from './index.styles';
import Button from '../../common/styled/Button';
import { Header } from './index.types';

interface Props {
  header: Header[];
  data: object[];
  keyReference: string;
  onRowClick?: (data: object) => void;
  onEdit?: (data: object) => void;
  onDelete?: (data: object) => void;
}


function Table({
  header, data, keyReference, onRowClick, onEdit, onDelete,
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
          { onEdit && (<S.Head />)}
          { onDelete && (<S.Head />)}
        </S.HeaderRow>


        {data.map((value, i) => {
          const onClick = () => {
            handleRowClick(value);
          };

          const clickable = !!onRowClick;
          return (
            <S.Row onClick={onClick} key={i} clickable={clickable}>
              {header.map(({ ref, render }) => {
                const content = (value as any)[ref];
                return (
                  <S.Cell key={ref}>
                    {render
                      ? render(content)
                      : <S.CellContents>{content}</S.CellContents>}
                  </S.Cell>
                );
              })}
              { onEdit && (
              <S.Cell>
                <Button label="Editar" onClick={() => onEdit(value)} styledObject={{ background: '#FFF', borderColor: '#3B2B5B', color: '#3B2B5B' }} />
              </S.Cell>
              )}
              { onDelete && (
              <S.Cell>
                <Button label="Excluir" onClick={() => onDelete(value)} styledObject={{ background: '#EE3F3F' }} />
              </S.Cell>
              )}
            </S.Row>
          );
        })}
      </tbody>
    </S.Table>
  );
}

export default Table;
