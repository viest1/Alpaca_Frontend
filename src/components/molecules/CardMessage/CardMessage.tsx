import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  p:last-child {
    background: #5757f3;
    border-radius: 1.4rem;
    padding: 0.2rem 0.9rem;
    color: white;
  }
`;

interface Message {
  message: {
    text: string;
    nameCreator: string;
    nameReceiver: string;
    createdAt: string;
  };
}

function CardMessage({ message }: Message) {
  return (
    <Container>
      {message.nameCreator && <p>{message.nameCreator}</p>}
      <p>{message.text}</p>
    </Container>
  );
}

export default CardMessage;
