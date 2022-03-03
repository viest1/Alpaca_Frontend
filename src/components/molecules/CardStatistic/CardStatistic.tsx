import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  max-width: 200px;
  max-height: 200px;
  background: ${({ theme }) => theme.color.main2};
  color: white;
  border-radius: 0.6rem;
  p:first-child {
    font-size: ${({ theme }) => theme.fontSizeOpenSans.s};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSizeOpenSans.l};
    font-weight: 800;
  }
`;

interface Statistic {
  item: [string, any];
}

function CardStatistic({ item }: Statistic) {
  return (
    <Container>
      <p>{item[0]}</p>
      <p>{item[1]}</p>
    </Container>
  );
}

export default CardStatistic;
