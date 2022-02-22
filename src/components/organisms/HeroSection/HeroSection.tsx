import React from 'react';
import styled from 'styled-components';
import { MdCheckCircleOutline } from 'react-icons/md';
import Button from '../../atoms/Button/Button';

const Background = styled.div`
  background: ${({ theme }) => theme.color.main2};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  padding: 0 3rem 3.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 440px) {
    max-width: 550px;
  }
  h3 {
    color: ${({ theme }) => theme.color.main1};
    text-align: center;
  }
  button {
    padding: 1.3rem 2rem;
    background: ${({ theme }) => theme.color.main3};
    font-size: ${({ theme }) => theme.fontSizeOpenSans.m};
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.color.main1};
    border: none;
    outline: none;
    width: 300px;
    text-transform: uppercase;
    font-weight: bold;
  }
  div:last-child {
    margin-bottom: 2.6rem;
  }
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 2rem;
  margin: 2.4rem 0;
  p {
    font-size: ${({ theme }) => theme.fontSizeOpenSans.xs};
  }
`;

const ContainerIconAndText = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const dataHeroSection = [
  {
    text: 'Take your business everywhere you goand feel safe that all your data is at one place',
    icon: <MdCheckCircleOutline fontSize={36} />,
    id: 1
  },
  {
    text: 'You can manage your clients, appointments and messages in one place',
    icon: <MdCheckCircleOutline fontSize={36} />,
    id: 2
  },
  {
    text:
      'We know that it takes time until you make a life out of it. So try it for ' +
      'free and grow until you decide to take your next step',
    icon: <MdCheckCircleOutline fontSize={36} />,
    id: 3
  }
];

function HeroSection() {
  return (
    <Background>
      <Container>
        <div>
          <h3>From freelancers to freelancer</h3>
        </div>
        <ContainerList>
          {dataHeroSection.map((item) => (
            <ContainerIconAndText key={item.id}>
              <div>{item.icon}</div>
              <p>{item.text}</p>
            </ContainerIconAndText>
          ))}
        </ContainerList>
        <div>
          <Button background="red" text={"Let's Try It!"} />
        </div>
      </Container>
    </Background>
  );
}

export default HeroSection;
