import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdLocalPhone, MdEmail, MdOutlineFacebook } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { IoLogoInstagram } from 'react-icons/io';
import { dataContact } from '../../../dataContact/dataContact';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;
const StyledContactWord = styled.div`
  display: flex;
  margin: auto;
  font-weight: bold;
`;
const StyledTeleEmail = styled.div`
  display: flex;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizeOpenSans.xxxs};
  margin: auto;
  &: hover {
    cursor: pointer;
  }
`;
const StyledSocialNetWorks = styled.div`
  display: flex;
  gap: 4rem;
  margin: auto;
  &: hover {
    cursor: pointer;
  }
`;

function Contact() {
  return (
    <StyledContact>
      <StyledContactWord>CONTACT</StyledContactWord>
      <StyledTeleEmail>
        <MdLocalPhone fontSize={30} />
        <StyledTeleEmail>{dataContact.telephone}</StyledTeleEmail>
        <br />
        <MdEmail fontSize={30} />
        <StyledTeleEmail>{dataContact.email}</StyledTeleEmail>
      </StyledTeleEmail>
      <StyledSocialNetWorks>
        <Link to="/">
          <MdOutlineFacebook color="black" />
        </Link>
        <Link to="/">
          <SiTwitter color="black" />
        </Link>
        <Link to="/">
          <IoLogoInstagram color="black" />
        </Link>
      </StyledSocialNetWorks>
    </StyledContact>
  );
}

export default Contact;
