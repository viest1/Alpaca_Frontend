import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import CompanyLogo from '../../../assets/illustrations/COMPANYLOGO.png';
import NavLink from '../../atoms/NavLink/NavLink';

interface StyledDivProps {
  isOpenMenu: boolean;
}

const Container = styled.div<StyledDivProps>`
  background: ${({ theme }) => theme.color.main1};
  color: ${({ theme }) => theme.color.main2};
  font-size: ${({ theme }) => theme.fontSizeInter.xl};
  border: 2px solid black;
  min-height: ${({ isOpenMenu }) => (isOpenMenu ? '100vh' : 'auto')};
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem 0 1rem;
  align-items: center;
`;

const FlexOpen = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 0.3rem 1rem;
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizeOpenSans.xxxs};
  position: absolute;
  bottom: 10px;
  right: -43px;
  font-weight: bold;
`;

const data = [
  {
    path: 'aboutUs',
    text: 'About us',
    id: 1
  },
  {
    path: 'plans',
    text: 'Plans',
    id: 2
  },
  {
    path: 'login',
    text: 'Login',
    id: 3
  },
  {
    path: 'signup',
    text: 'Sign up',
    id: 4
  },
  {
    path: 'aboutUs',
    text: 'About us',
    id: 5
  },
  {
    path: '/',
    text: '',
    image: CompanyLogo,
    alt: 'Logo',
    id: 6
  }
];

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <Container isOpenMenu={isOpenMenu}>
      {!isOpenMenu && (
        <Flex>
          <div style={{ position: 'relative' }}>
            <NavLink path="/" image={CompanyLogo} alt="Logo" />
            <StyledP>live outside the box</StyledP>
          </div>
          <div>{!isOpenMenu && <GiHamburgerMenu fontSize={48} onClick={handleOpenMenu} />}</div>
        </Flex>
      )}
      {isOpenMenu && (
        <>
          <FlexOpen>
            <div style={{ position: 'relative' }}>
              <NavLink path="/" image={CompanyLogo} alt="Logo" />
              <StyledP>live outside the box</StyledP>
            </div>
            <div>
              <GrClose onClick={handleOpenMenu} />
            </div>
          </FlexOpen>
          {data.map((item) => (
            <NavLink
              key={item.id}
              path={item.path}
              text={item.text}
              image={item.image}
              alt={item.alt}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default Header;
