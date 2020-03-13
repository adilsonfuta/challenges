import React from 'react';
import { Container } from './index.styles';

interface Props {
    label?: string;
    type?: string;
    labelColor?: string;
    placeholder?: string;
    value: string;
    onChange(value: string): void;
}

function Input({
  label, onChange, value, labelColor = '#FFF', placeholder = '', type = 'text',
}:Props): React.ReactElement {
  return (
    <Container>
      {label && (<span style={{ color: labelColor }}>{label}</span>)}
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
}


export default Input;
