import React from 'react';
import styled from 'styled-components';
import {
  ContainerPhoto,
  FlexPhoto,
  OneTestimonial,
  PRight,
  TextTestimonial
} from '../SectionProductDesc1/SectionProductDesc1';
import Button from '../../atoms/Button/Button';
import { RedSpan } from '../../atoms/RedSpan/RedSpan';
import ManFlight from '../../../assets/illustrations/ManBookingFlight.png';
import KidneyBackground from '../../../assets/illustrations/KidneyTextBackground.png';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h5 {
    width: 80%;
    margin: 1rem auto;
    font-weight: bold;
    text-align: center;
  }
  > div:last-child {
    margin: 3rem auto 0 auto;
  }
`;

const ContainerIllustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 300px;
    height: auto;
  }
  img:last-child {
    width: 420px;
    position: absolute;
    bottom: -310px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

function SectionProductDesc2() {
  return (
    <Container>
      <div>
        <h5>
          You can <RedSpan>live your life</RedSpan> without worrying of who sent what where
        </h5>
      </div>
      <ContainerIllustration>
        <img src={ManFlight} alt="Man Who booking Flight" />
        <img src={KidneyBackground} alt="background" />
      </ContainerIllustration>
      <OneTestimonial style={{ padding: '1rem' }}>
        <TextTestimonial>
          <p>"Lorem ipsum dolor sit</p>
          <p>Amet at vero..."</p>
          <PRight>Lorem ipsum</PRight>
          <PRight>Lorem ipsum dolor sit amet</PRight>
        </TextTestimonial>
        <FlexPhoto style={{ justifyContent: 'flex-end' }}>
          <ContainerPhoto>Photo</ContainerPhoto>
        </FlexPhoto>
      </OneTestimonial>
      <div>
        <Button text="Choose a Plan" color="#001523" background="#fcbf49" />
      </div>
    </Container>
  );
}

export default SectionProductDesc2;
