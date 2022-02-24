import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom'; // Link to create the
// import Contact from '../../molecules/Contact/Contact';
import { MdLocalPhone, MdEmail, MdOutlineFacebook } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { IoLogoInstagram } from 'react-icons/io';
import mobileFooterWave from '../../../assets/illustrations/mobileFooterWaveBlue.png';

// 1. html aufbauen

const FooterBody = styled.div`
  background-color: #001523;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-top: -44px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const FooterWave = styled.div`
  background-image: url(${mobileFooterWave});
  background-position: top;
  background-size: 100% 100px;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100px;
`;

const FooterOrganism = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: left;
  margin-bottom: 18px;
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  margin-left: 10px;
`;

// alles, was html(html tags) ist klein schreiben, nur Components groß
// contact wurde importiert und kann deshalb im return zurückgegeben werden
// ract reurned nur ein element, deshalb muss ein allumschließendes element gegeben sein, kann auch div oder leerer tag sein
function Footer() {
  return (
    <FooterOrganism>
      <FooterWave />
      <FooterBody>
        <div>DE </div>
        <FooterRow>
          <MdLocalPhone color="white" size={28} />
          <StyledSpan>+49 1234 6666666</StyledSpan>
        </FooterRow>
        <FooterRow>
          <MdEmail color="white" size={28} />
          <StyledSpan>info@blabla.de</StyledSpan>
        </FooterRow>
        <IconRow>
          <MdOutlineFacebook size={28} color="white" />
          <SiTwitter size={28} color="white" />
          <IoLogoInstagram size={28} color="white" />
        </IconRow>
      </FooterBody>
    </FooterOrganism>
  );
}

export default Footer;
