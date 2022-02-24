import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import CompanyLogo from '../../../assets/illustrations/COMPANYLOGO.png';
import NavLink from '../../atoms/NavLink/NavLink';
import Contact from '../../molecules/Contact/Contact';

interface StyledDivProps {
  isOpenMenu: boolean;
}

const Container = styled.div<StyledDivProps>`
  background: ${({ theme }) => theme.color.main1};
  color: ${({ theme }) => theme.color.main2};
  font-size: ${({ theme }) => theme.fontSizeInter.m};
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
  align-items: center;
  border: 1px solid grey;
  padding: 0 1rem;
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizeOpenSans.xxxs};
  position: absolute;
  bottom: 10px;
  right: -43px;
  font-weight: bold;
`;
const StyledSlogan = styled.p`
  font-size: ${({ theme }) => theme.fontSizeOpenSans.xxs};
  display: flex;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  margin: auto;
  font-weight: bold;
`;
const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem 2rem;
`;
const StyledLogoSlogan = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const data = [
  {
    path: 'aboutUs',
    text: 'ABOUT US',
    id: 1
  },
  {
    path: 'plans',
    text: 'PLANS',
    id: 2
  },
  {
    path: 'login',
    text: 'LOGIN',
    id: 3
  },
  {
    path: 'signUp',
    text: 'SIGN UP',
    id: 4
  },
  {
    path: 'contact',
    text: 'CONTACT',
    id: 5
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
          <div>
            {!isOpenMenu && (
              <GiHamburgerMenu fontSize={48} cursor="pointer" onClick={handleOpenMenu} />
            )}
          </div>
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
              <GrClose onClick={handleOpenMenu} cursor="pointer" fontSize={48} />
            </div>
          </FlexOpen>
          <StyledMenu>
            {data.map((item) => (
              <NavLink key={item.id} path={item.path} text={item.text} />
            ))}
          </StyledMenu>
          <br />
          <StyledLogoSlogan>
            <NavLink path="/" bigLogo image={CompanyLogo} alt="Logo" />
            <StyledSlogan>live outside the box</StyledSlogan>
          </StyledLogoSlogan>

          <Contact />
        </>
      )}
    </Container>
  );
}

export default Header;
