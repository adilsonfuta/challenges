import React, { CSSProperties } from 'react';
import { Container } from './index.styles';

interface Props {
    label?: string;
    type?: string;
    labelColor?: string;
    placeholder?: string;
    value: any;
    onChange(value: any): void;
    styledObject?: CSSProperties;
}

function Input({
  label, onChange, value, labelColor = '#FFF', placeholder = '', type = 'text', styledObject = {},
}:Props): React.ReactElement {
  return (
    <Container>
      {label && (<span style={{ color: labelColor }}>{label}</span>)}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={styledObject}
      />
    </Container>
  );
}


export default Input;
