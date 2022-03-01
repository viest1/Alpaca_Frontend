import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  label {
    font-family: Inter;
    display: block;
    font-weight: 600;
    padding-left: 0.3rem;
  }
  input {
    display: block;
    border-radius: 0.8rem;
    padding: 0.7rem 1rem;
    margin: 0.7rem 0 0.7rem 0;
    font-size: 14px;
  }
  input:focus {
    outline: 3px solid ${({ theme }) => theme.color.main6};
  }
`;

const TextContainer = styled.div`
  display: block;
  textarea {
    padding: 0.7rem 1rem;
    margin: 0.7rem 0 0.7rem 0;
    border-radius: 10px;
    width: 100%;

    &:focus {
      outline: 3px solid ${({ theme }) => theme.color.main6};
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  label {
    font-weight: 600;
    padding-left: 0.3rem;
  }
  input {
    border-radius: 0.8rem;
    padding: 0.7rem 1rem;
    margin: 0.7rem 0 0.7rem 0;
    font-size: 14px;
    width: 25px;
  }
`;

interface FormInput {
  name: string;
  label?: string | undefined;
  type?: string | undefined;
  placeholder?: string | undefined;
  onChange?: any;
  value?: string;
  required?: boolean;
  style?: React.CSSProperties;
  TextAreaWithLabel?: boolean;
  cols?: number;
  rows?: number;
  maxlength?: number;
  checked?: boolean;
  id?: string;
}

function InputWithLabel({
  name,
  label,
  type,
  placeholder,
  onChange,
  value,
  required,
  style,
  TextAreaWithLabel,
  cols,
  rows,
  maxlength,
  checked,
  id
}: FormInput) {
  if (type === 'radio' || type === 'checkbox') {
    return (
      <div>
        <CheckboxContainer>
          {label && (
            <label htmlFor={name} style={style}>
              {label}
            </label>
          )}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={id || name}
            onChange={onChange}
            value={value}
            required={required}
            checked={checked}
          />
        </CheckboxContainer>
      </div>
    );
  }

  return (
    <div>
      {TextAreaWithLabel ? (
        <TextContainer>
          {label && (
            <label htmlFor={name} style={style}>
              {label}
            </label>
          )}
          <textarea
            name={name}
            placeholder={placeholder}
            id={name}
            onChange={onChange}
            required={required}
            cols={cols}
            rows={rows}
            maxLength={maxlength}
          />
        </TextContainer>
      ) : (
        <Container>
          {label && (
            <label htmlFor={name} style={style}>
              {label}
            </label>
          )}
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
      )}
    </div>
  );
}

InputWithLabel.defaultProps = {
  type: 'text',
  placeholder: undefined,
  onChange: undefined,
  value: undefined,
  required: false,
  style: undefined,
  TextAreaWithLabel: false,
  cols: undefined,
  rows: undefined,
  maxlength: undefined,
  checked: undefined,
  id: undefined,
  label: undefined
};

export default InputWithLabel;
