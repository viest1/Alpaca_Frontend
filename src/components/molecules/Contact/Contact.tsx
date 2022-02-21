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
  p {
    text-align: center;
  }
`;
const StyledTeleEmail = styled.div`
  display: flex;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fontSizeInter.s};
`;
const StyledSocialNetWorks = styled.div`
  display: flex;
  gap: 4rem;
  margin: 0 0 7rem 6rem;
`;

function Contact() {
  return (
    <StyledContact>
      <p>CONTACT</p>
      <StyledTeleEmail>
        <MdLocalPhone fontSize={30} />
        <StyledTeleEmail>{dataContact.telephone}</StyledTeleEmail>
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
