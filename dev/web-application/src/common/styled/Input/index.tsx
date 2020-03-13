import React from 'react';
import { Container } from './index.styles';

interface Props {
    label?: string;
    labelColor?: string;
    placeholder?: string;
    value: string;
    onChange(value: string): void;
}

function Input({
  label, labelColor = '#FFF', onChange, value, placeholder = '',
}:Props): React.ReactElement {
  return (
    <Container>
      {label && (<span style={{ color: labelColor }}>{label}</span>)}
      <input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
}


export default Input;
