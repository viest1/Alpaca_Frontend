import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { RedSpan } from '../../atoms/RedSpan/RedSpan';
import { PurpleSpan } from '../../atoms/PurpleSpan/PurpleSpan';
import KidneyBackground2 from '../../../assets/illustrations/KidneyTextBackground2.png';
import face1 from '../../../assets/images/face1small.jpg';
import face2 from '../../../assets/images/face2small.jpg';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  h5 {
    font-weight: 900;
    text-align: center;
    width: 90%;
    margin: 2rem auto;
  }
  > div:last-child {
    margin: 0 auto;
  }
`;

export const Box = styled.div`
  padding: 1rem;
  border: 1px solid red;
  border-radius: 0.8rem;
  margin: auto;
  width: 90%;
  max-width: 330px;
  min-width: 280px;
  background: white;

  p {
    margin: 0;
    text-align: right;
    padding-right: 0.5rem;
  }

  p:first-child {
    margin-bottom: 1rem;
    text-align: left;
    padding-right: 0;
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSizeOpenSans.xs};
    color: #7b42f6;
  }

  p:last-child {
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizeOpenSans.m};
    color: grey;
  }
`;

const Testimonials = styled.div`
  padding: 0 1rem;
  margin: 2rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 399px) {
    padding: 0;
  }
`;

export const OneTestimonial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: space-between;
  p {
    font-weight: 500;
  }
`;

export const PRight = styled.p`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizeOpenSans.xs};
`;

export const TextTestimonial = styled.div`
  width: 70%;
`;

export const ContainerPhoto = styled.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const FlexPhoto = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const TextAndKidneyBackground = styled.div`
  position: relative;
  img:last-child {
    width: 330px;
    position: absolute;
    top: 50px;
    left: 60%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

function SectionProductDesc1(): JSX.Element {
  return (
    <Container>
      <TextAndKidneyBackground>
        <h5>
          Manage <RedSpan>files</RedSpan>, <RedSpan>messages</RedSpan> and all your{' '}
          <RedSpan>customers</RedSpan> info in <PurpleSpan>one place</PurpleSpan>
        </h5>
        <div>
          <img src={KidneyBackground2} alt="kidney background" />
        </div>
      </TextAndKidneyBackground>
      <Box>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aut cumque
          cupiditate eaque eligendi incidunt libero, maiores nesciunt nihil praesentium, rerum vero
          !"
        </p>
        <p>Lorem ipsum</p>
        <p>Golor sit amet</p>
      </Box>
      <Testimonials>
        <OneTestimonial>
          <FlexPhoto>
            <ContainerPhoto>
              <img src={face1} alt="face" />
            </ContainerPhoto>
          </FlexPhoto>
          <TextTestimonial>
            <p>"Lorem ipsum dolor sit </p>
            <p>Amet at vero..."</p>
            <PRight>Lorem ipsum</PRight>
            <PRight>Lorem ipsum dolor sit amet</PRight>
          </TextTestimonial>
        </OneTestimonial>
        <OneTestimonial>
          <TextTestimonial>
            <p>"Lorem ipsum dolor sit</p>
            <p>Amet at vero..."</p>
            <PRight>Lorem ipsum</PRight>
            <PRight>Lorem ipsum dolor sit amet</PRight>
          </TextTestimonial>
          <FlexPhoto style={{ justifyContent: 'flex-end' }}>
            <ContainerPhoto>
              <img src={face2} alt="face" />
            </ContainerPhoto>
          </FlexPhoto>
        </OneTestimonial>
      </Testimonials>
      <div>
        <Button text="Start Free Trial" background="#001523" color="#fcbf49" />
      </div>
    </Container>
  );
}

export default SectionProductDesc1;
