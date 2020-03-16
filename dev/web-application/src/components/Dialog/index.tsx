import React from 'react';
import * as CSSTypes from 'csstype';
import { IconsPath } from '../../constants/path';
import * as S from './index.styles';

export interface SubmitOpts {
  keepOpen?: boolean;
}

export interface Dialog {
  visible: boolean;
  maxWidth?: CSSTypes.MaxWidthProperty<string | number>;
  onVisibleChange: (visible: boolean) => void;
}


const Dialog: React.FunctionComponent<Dialog> = ({
  // eslint-disable-next-line react/prop-types
  visible, onVisibleChange, maxWidth, children,
}) => (
  <S.Container visible={visible}>
    <S.Content maxWidth={maxWidth}>
      <S.CloseButton onClick={() => onVisibleChange(!visible)}>
        <img src={IconsPath.CLOSE} alt="" />
      </S.CloseButton>

      <S.Main>
        {visible && (<>{ children }</>)}
      </S.Main>
    </S.Content>
  </S.Container>
);

export default Dialog;
