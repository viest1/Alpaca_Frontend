import React from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import Button from '../../atoms/Button/Button';
import { RedSpan } from '../../atoms/RedSpan/RedSpan';

const PageContainer = styled.div`
  background: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  

  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    {
     justify-content: flex-end
  }
`;

export const TextContainer = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    -webkit-text-stroke: 1px ${({ theme }) => theme.color.main2};

    ${({ theme }) => theme.up(theme.breakpoint.m)} {
      {
        font-size: ${({ theme }) => theme.fontSizeInter.xxl};
        text-align: start;
      }
  }

  p {
    padding: 0 2rem 1.5rem 2rem;
  }
`;

const FormContainer = styled.div`
  display: block;
  margin: 0px auto;
  padding: 2rem;
  mix-width: 250px;
  max-width: 600px;
  flex-grow: 2;

  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    margin-right: 10rem;
    flex-grow: 3;
    }
  }
`;

function Contact(): JSX.Element {
  return (
    <PageContainer>
      <TextContainer>
        <h2 style={{ color: 'white', WebkitTextStroke: '0' }}>
          Contact Us. <br /> We appreciate <br /> <RedSpan>honest</RedSpan> feedback
        </h2>
      </TextContainer>
      <FormContainer>
        {' '}
        <InputWithLabel
          name="fullName"
          label="Full Name"
          type="input"
          placeholder="Full Name"
          style={{ color: 'white' }}
          /* onChange */ /* value */ required
        />
        <InputWithLabel
          name="email"
          label="E-mail"
          type="input"
          placeholder="E-Mail Address"
          style={{ color: 'white' }}
          /* onChange */ /* value */ required
        />
        <InputWithLabel
          TextAreaWithLabel
          label="Tell Us Whatever you want..."
          name="textArea"
          placeholder="...But be nice :)"
          rows={10}
          maxlength={120}
          style={{ color: 'white', fontFamily: 'Inter', fontWeight: 'Bold' }}
          required
        />
        <Button
          text="Send Form"
          type="submit"
          color="black"
          background="#9e0059"
          style={{ width: '100%' }}
        />
      </FormContainer>
    </PageContainer>
  );
}

export default Contact;
