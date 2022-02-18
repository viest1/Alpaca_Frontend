import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.main2};
  img {
    width: 140px;
    height: auto;
  }
`;

const ContainerNavText = styled.div`
  padding: 0.2rem;
`;

// ? - optional
interface Props {
  path: string;
  text?: string | undefined;
  image: string | undefined;
  alt: string | undefined;
}

function NavLink({ path, text, image, alt }: Props) {
  return (
    <StyledLink to={path}>
      {image && <img src={image} alt={alt} />}
      {text && <ContainerNavText>{text}</ContainerNavText>}
    </StyledLink>
  );
}

NavLink.defaultProps = {
  text: undefined
};

export default NavLink;
