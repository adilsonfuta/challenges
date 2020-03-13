import React from 'react';
import { Container } from './index.styles';

interface Props {
    label: string;
    onClick(): void;
}

function Button({
  label, onClick,
}:Props): React.ReactElement {
  return (
    <Container>
      <button type="button" onClick={onClick}>
        <span>
          {label}
        </span>
      </button>
    </Container>
  );
}


export default Button;
