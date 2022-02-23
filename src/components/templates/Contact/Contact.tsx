import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  border: 2px solid red;
`;

function Contact(): JSX.Element {
  return (
    <PageContainer>
      <div>Contact</div>
    </PageContainer>
  );
}

export default Contact;
