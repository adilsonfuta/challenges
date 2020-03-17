
import styled, { css } from 'styled-components';

export const Table = styled.table<{ empty: boolean }>`
  border-collapse: separate;
  border-spacing: 0;

  tbody {
    > tr {
      &:not(:nth-child(1)):not(:last-child) {
        > td {
          border-bottom: 1px solid #dadada;
        }
      }

      > th,
      > td {
        &:first-child {
          border-left: 1px solid #dadada;
        }

        &:last-child {
          border-right: 1px solid #dadada;
        }
      }

      &:first-child {
        > th,
        > td {
          border-top: 1px solid #dadada;

          &:first-child {
            border-top-left-radius: 0.2rem;
          }
          &:last-child {
            border-top-right-radius: 0.2rem;
          }
        }
        > th {
          border-bottom: 1px solid #dadada;
        }
      }

      &:last-child {
        > th,
        > td {
          border-bottom: 1px solid #dadada;

          ${(props) => !props.empty
            && css`
              &:first-child {
                border-bottom-left-radius: 0.2rem;
              }
              &:last-child {
                border-bottom-right-radius: 0.2rem;
              }
            `}
        }
      }
    }
  }
`;
export const Head = styled.th`
  padding: 0.5rem;
  color: #FFF;
  font-weight: 400;
  padding: 10px 80px;
`;

export const Row = styled.tr<{ clickable?: boolean }>`
  background-color: white;
  cursor: pointer;

  &:nth-child(even) {
    background-color: #fafafa;
  }
  &:hover {
    background-color: #e9e9e9;
  }

  ${(props) => props.clickable
    && css`
      cursor: pointer;
    `}
`;
export const HeaderRow = styled.tr`
  background-color: #3B2B5B;
`;

export const CellContents = styled.span`

`;

export const Cell = styled.td`
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-align: -webkit-center;
`;
