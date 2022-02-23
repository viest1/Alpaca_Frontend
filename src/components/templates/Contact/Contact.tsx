import React from 'react';
import styled from 'styled-components';
import { OpeningTextContainer } from '../AboutUs/AboutUs';
import { RedSpan } from '../../atoms/RedSpan/RedSpan';

const PageContainer = styled.div`
  border: 2px solid red;
`;

function Contact(): JSX.Element {
  return (
    <PageContainer>
      <OpeningTextContainer>
        <h2>
          Contact Us.We appreciate <RedSpan>honest</RedSpan> feedback
        </h2>
      </OpeningTextContainer>
    </PageContainer>
  );
}

export default Contact;
