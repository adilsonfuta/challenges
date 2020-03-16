import styled, { css } from 'styled-components';
import * as CSSTypes from 'csstype';

export const Container = styled.div<{ visible: boolean }>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  left: 0;
  top: 0px;
  z-index: 99999;
  ${(props) => !props.visible
    && css`
      pointer-events: none;
      opacity: 0;
    `}
`;

export const Content = styled.div<{width?: number, maxWidth?: CSSTypes.MaxWidthProperty<string | number>}>`
  max-width: ${({ maxWidth }) => (maxWidth || 'unset')};
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 150px auto;
  z-index: 11;
  height: fit-content;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 99999;

  img {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    padding: 2.5px;
    width: 20px;
    height: 20px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
