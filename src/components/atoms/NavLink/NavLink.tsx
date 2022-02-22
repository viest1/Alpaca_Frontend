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
    width: 15rem;
  }
`;

const ContainerNavText = styled.div`
  padding: 0.2rem;
  &: hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.main4};
  }
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
