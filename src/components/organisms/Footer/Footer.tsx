import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom'; // Link to create the
import Contact from '../../molecules/Contact/Contact';
import mobileFooterWave from '../../../assets/illustrations/mobileFooterWaveBlue.png';

// 1. html aufbauen

const FooterBody = styled.div`
  background-color: #001523;
  color: #999999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FooterWave = styled.div`
  background-image: url(${mobileFooterWave});
  background-position: top;
  background-size: 100% 50px;
  background-repeat: no-repeat;
  width: 100vw;
  height: 50px;
`;

const FooterOrganism = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// alles, was html(html tags) ist klein schreiben, nur Components groß
// contact wurde importiert und kann deshalb im return zurückgegeben werden

function Footer() {
  return (
    <FooterOrganism>
      <FooterWave />
      <FooterBody>
        <Contact />
      </FooterBody>
    </FooterOrganism>
  );
}

export default Footer;
