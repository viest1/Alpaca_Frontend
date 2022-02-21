import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { RedSpan } from '../../atoms/RedSpan/RedSpan';
import { PurpleSpan } from '../../atoms/PurpleSpan/PurpleSpan';
import KidneyBackground2 from '../../../assets/illustrations/KidneyTextBackground2.png';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  h5 {
    font-weight: 800;
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
  min-width: 250px;
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
`;

const Testimonials = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OneTestimonial = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PRight = styled.p`
  text-align: right;
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
`;

const FlexPhoto = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
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

function SectionProductDesc1() {
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
          <FlexPhoto style={{ width: '30%' }}>
            <ContainerPhoto>Photo</ContainerPhoto>
          </FlexPhoto>
          <TextTestimonial>
            <p>"Lorem ipsum dolor sit amet.</p>
            <p>At vero..."</p>
            <PRight>Lorem ipsum.</PRight>
            <PRight>Lorem ipsum dolor sit amet.</PRight>
          </TextTestimonial>
        </OneTestimonial>
        <OneTestimonial>
          <TextTestimonial>
            <p>"Lorem ipsum dolor sit amet.</p>
            <p>At vero..."</p>
            <PRight>Lorem ipsum.</PRight>
            <PRight>Lorem ipsum dolor sit amet.</PRight>
          </TextTestimonial>
          <ContainerPhoto>Photo</ContainerPhoto>
        </OneTestimonial>
      </Testimonials>
      <div>
        <Button text="Start Free Trial" background="#001523" color="#fcbf49" />
      </div>
    </Container>
  );
}

export default SectionProductDesc1;
