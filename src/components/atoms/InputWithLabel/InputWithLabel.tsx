import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  label {
    display: block;
    font-weight: 600;
    padding-left: 0.3rem;
  }
  input {
    display: block;
    border-radius: 0.8rem;
    padding: 0.7rem 1rem;
    font-size: 14px;
  }
  input:focus {
    border: 2px solid ${({ theme }) => theme.color.main6};
  }
`;

interface FormInput {
  name: string;
  label: string | undefined;
  type?: string | undefined;
  placeholder?: string | undefined;
  onChange?: any;
  value?: string;
  required?: boolean;
}

function InputWithLabel({ name, label, type, placeholder, onChange, value, required }: FormInput) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        value={value}
        required={required}
      />
    </Container>
  );
}

InputWithLabel.defaultProps = {
  type: 'text',
  placeholder: undefined,
  onChange: undefined,
  value: undefined,
  required: false
};

export default InputWithLabel;
