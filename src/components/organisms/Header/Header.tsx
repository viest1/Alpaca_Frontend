import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import CompanyLogo from '../../../assets/illustrations/COMPANYLOGO.png';

export const Alpaca = styled.div`
  background: ${({ theme }) => theme.color.main1};
  color: ${({ theme }) => theme.color.main2};
  display: flex;
  justify-content: flex-end;
  &:first-child {
    justify-content: flex-start;
  }
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSizeInter.xl};
  border: 2px solid black;
`;

export const Logo = styled.img`
  padding: 2rem;
  font-size: 3rem;
`;
export const AboutUs = styled.div`
  padding: 2rem;
  display: flex;
`;
export const Plans = styled.div`
  padding: 2rem;
`;
export const Login = styled.div`
  padding: 2rem;
`;
export const SingUp = styled.div`
  padding: 2rem;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.main2};
`;

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toogle = () => {
    setIsOpenMenu((prev) => !prev);
  };
  // const handleOpenMenu = () => {
  //   setIsOpenMenu(true);
  // };
  // const handleCloseMenu = () => {
  //   setIsOpenMenu(false);
  // };
  return (
    <Alpaca>
      <StyledLink to="/">
        <Logo src={CompanyLogo} />
      </StyledLink>

      {isOpenMenu ? null : <GiHamburgerMenu onClick={toogle} />}
      {isOpenMenu ? (
        <>
          <GrClose onClick={toogle} />
          <StyledLink to="/about-us">
            <AboutUs>About Us</AboutUs>
          </StyledLink>
          <StyledLink to="/plans">
            <Plans>Plans</Plans>
            <StyledLink to="/login">
              <Login>Login</Login>
            </StyledLink>
            <StyledLink to="/sing-up">
              <SingUp>Sign up</SingUp>
            </StyledLink>
            <StyledLink to="/">
              <Logo src={CompanyLogo} />
            </StyledLink>
          </StyledLink>
        </>
      ) : null}
    </Alpaca>
  );
}

export default Header;
