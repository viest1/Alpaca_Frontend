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

const BigLogo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.main2};
  img {
    width: 21rem;
    display: flex;
    margin: -1rem 0 0 2rem;
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
  image?: string | undefined;
  alt?: string | undefined;
  bigLogo?: boolean | undefined;
}

function NavLink({ path, text, image, alt, bigLogo }: Props) {
  return (
    <div>
      {bigLogo ? (
        <BigLogo to={path}>
          {image && <img src={image} alt={alt} />}
          {text && <ContainerNavText>{text}</ContainerNavText>}
        </BigLogo>
      ) : (
        <StyledLink to={path}>
          {image && <img src={image} alt={alt} />}
          {text && <ContainerNavText>{text}</ContainerNavText>}
        </StyledLink>
      )}
    </div>
  );
}

NavLink.defaultProps = {
  text: undefined,
  bigLogo: false,
  alt: undefined,
  image: undefined
};

export default NavLink;
