import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 1.3rem 2rem;
  background: ${({ theme }) => theme.color.main3};
  font-size: ${({ theme }) => theme.fontSizeOpenSans.m};
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.color.main1};
  border: none;
  outline: none;
  width: 300px;
  text-transform: uppercase;
  font-weight: bold;
`;

interface ButtonInterface {
  text: string;
  color?: string;
  background?: string;
  type?: 'button' | 'submit';
  border?: string;
}

function Button({ text, color, background, type, border }: ButtonInterface) {
  return (
    <ButtonStyle type={type} style={{ color, background, border }}>
      {text}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  color: undefined,
  background: undefined,
  type: 'button',
  border: undefined
};

export default Button;
