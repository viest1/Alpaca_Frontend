import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  h3 {
    margin: 1rem;
  }
  div:last-child {
    margin-top: 1rem;
  }
`;

function Page404() {
  return (
    <Container>
      <h3>Page Not Found</h3>
      <h3>Error 404</h3>
      <Button text="Go to Home" />
    </Container>
  );
}

export default Page404;
