import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  label {
    display: block;
  }
  input {
    display: block;
    border-radius: 0.8rem;
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
}

function InputWithLabel({ name, label, type, placeholder }: FormInput) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} id={name} />
    </Container>
  );
}

InputWithLabel.defaultProps = {
  type: 'text',
  placeholder: undefined
};

export default InputWithLabel;
