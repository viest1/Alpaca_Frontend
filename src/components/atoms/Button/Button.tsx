import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button<ButtonInterface>`
  padding: 1.3rem 2rem;
  background: ${({ theme, background }) => background || theme.color.main3};
  font-size: ${({ theme }) => theme.fontSizeOpenSans.m};
  border-radius: 0.6rem;
  color: ${({ theme, color }) => color || theme.color.main1};
  border: ${({ border }) => border || 'none'};
  outline: none;
  width: 300px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    color: white;
    background: ${({ theme }) => theme.color.main5};
  }
  svg {
    margin-right: 1rem;
  }
`;

interface ButtonInterface {
  text?: string;
  color?: string;
  background?: string;
  type?: 'button' | 'submit';
  border?: string;
  width?: string;
  onClick?: () => void;
  icon?: any;
}
  
function Button({ text, color, background, type, border, width, onClick }: ButtonInterface) {
  return (
    <ButtonStyle
      type={type}
      color={color}
      background={background}
      border={border}
      onClick={onClick}
      width={width}
    >
        {icon && <span>{icon}</span>}
        <span>{text}</span>
    </ButtonStyle>
  );
}

Button.defaultProps = {
  color: undefined,
  background: undefined,
  type: 'button',
  border: undefined,
  text: undefined,
  width: undefined,
  onClick: undefined
  icon: undefined
};

export default Button;
