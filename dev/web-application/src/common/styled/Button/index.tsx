import React, { CSSProperties } from 'react';
import { Container } from './index.styles';

interface Props {
    label: string;
    onClick(): void;
    styledObject?: CSSProperties;
}

function Button({
  label, onClick, styledObject = {},
}:Props): React.ReactElement {
  return (
    <Container type="button" onClick={onClick} style={styledObject}>
      <span>
        {label}
      </span>
    </Container>
  );
}


export default Button;
