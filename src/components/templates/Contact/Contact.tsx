import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import Button from '../../atoms/Button/Button';
import { RedSpan } from '../../atoms/RedSpan/RedSpan';
import useError from '../../../hooks/useError';
import useForm from '../../../hooks/useForm';

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;
  
  

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

    ${({ theme }) => theme.up(theme.breakpoint.l)} {
      {
        font-size: ${({ theme }) => theme.fontSizeInter.xl};
        text-align: start;
      }
  }

  p {
    padding: 0 2rem 1.5rem 2rem;
  }
`;

const FormContainer = styled.form`
  display: block;
  margin: 0px auto;
  padding: 2rem;
  min-width: 250px;
  max-width: 600px;
  flex-grow: 2;
  border: solid 3px black;
  box-shadow:${({ theme }) => theme.boxShadow.mainShadow};
  border-radius: 10px;
  background: black;


  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    margin-right: 10rem;
    flex-grow: 3;
    }
  }
`;

function Contact(): JSX.Element {
  interface ContactMessage {
    name: string;
    email: string;
    message: string;
  }

  const navigate = useNavigate();

  const initialValue: ContactMessage = {
    name: '',
    email: '',
    message: ''
  };

  const { handleChange, inputs } = useForm(initialValue);
  const { handleError } = useError();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const sendMessage = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/contactForm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        if (res.status >= 200 && res.status < 300) {
          navigate('/');
          handleError('You sent message correctly', true);
        } else {
          handleError(resJSON.message);
        }
      } catch (error: unknown) {
        handleError();
      }
    };

    sendMessage();
  };
  const { t } = useTranslation();
  return (
    <PageContainer>
      <TextContainer>
        <h2 style={{ WebkitTextStroke: '0' }}>
          {t('contact1')} <br /> {t('contact2')} <br /> <RedSpan>{t('contact3')}</RedSpan>
          {t('contact4')}
        </h2>
      </TextContainer>
      <FormContainer onSubmit={handleSubmit}>
        {' '}
        <InputWithLabel
          name="name"
          label={t('contactChatName')}
          placeholder={t('contactChatName')}
          color="#ffffff"
          onChange={handleChange}
          value={inputs.name}
          /* value */ required
        />
        <InputWithLabel
          name="email"
          label="E-mail"
          type="email"
          placeholder="E-Mail Address"
          color="white"
          onChange={handleChange}
          value={inputs.email}
          /* value */ required
        />
        <InputWithLabel
          TextAreaWithLabel
          label={t('contactChatText')}
          name="message"
          placeholder={t('contactChatInnerText')}
          rows={10}
          maxlength={120}
          color="white"
          required
          onChange={handleChange}
          value={inputs.message}
        />
        <Button
          text={t('contactChatButton')}
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
