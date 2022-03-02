import React, { SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

import { Context } from '../../../providers/GeneralProvider';
import useForm from '../../../hooks/useForm';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
// import useError from '../../../hooks/useError';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 1rem;
  h3,
  h4 {
    text-align: center;
    margin: 0;
    margin-top: 1rem;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    ${({ theme }) => theme.up(theme.breakpoint.m)} {
      h4 {
        margin-bottom: 1rem;
      }
    }
  }
`;
const ContainerDiv = styled.div`
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    background: ${({ theme }) => theme.color.main1};
    display: flex;
    align-items: ;
    gap: 3rem;
    padding: 2rem 3rem;

    border: 1px solid black;
  }
`;

const ContainerPhoto = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-item: center;
  justify-content: center;
  border: 1px solid black;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    margin: auto;
    margin-bottom: 3rem;
    diplay: block;
    border-radius: 50%;
    width: 220px;
    height: 220px;
  }
`;
const ParagraphAdd = styled.div`
  display: none;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerButton2 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: none;
  }
`;
const ContainerButtonSubmit = styled.div`
  display: none;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: block;
  }
`;
const HeadingAdd = styled.div`
  display: none;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: flex;
    justify-content: flex-start;
  }
`;
const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;
const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
`;

function NewClient() {
  const { userData } = useContext(Context);
  interface initial {
    name: string;
    surname: string;
    email: string;
    password: string;
    phoneNumber: string;
    identityCardNumber: string;
    taxNumber: string;
  }
  // updating both objects
  const initialValue: initial = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phoneNumber: 'string',
    identityCardNumber: 'string',
    taxNumber: 'string'
  };
  const { inputs, handleChange } = useForm(initialValue);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData?.token}`
        },
        body: JSON.stringify(inputs)
      });
      const resJSON = await res.json();
      console.log(resJSON);
    } catch (error: any) {
      console.log('FETCHING ERROR', error);
    }
  };
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <h3>CREATE NEW CUSTOMER ACCOUNT</h3>
          <ContainerDiv>
            <DivOne>
              <HeadingAdd>
                <h4>User Customer</h4>
              </HeadingAdd>
              <ContainerPhoto>
                <img src="" alt="" />
              </ContainerPhoto>
              <ContainerButton>
                <Button background="#1F313E" text="Upload Photo" />
              </ContainerButton>
            </DivOne>
            <DivTwo>
              <h4>Contact</h4>
              <InputWithLabel
                label="Name*"
                name="name"
                placeholder="Give your Name"
                onChange={handleChange}
                required
              />
              <InputWithLabel
                label="Surname*"
                name="surname"
                placeholder="Give your Surname"
                onChange={handleChange}
                required
              />

              <InputWithLabel
                label="Email*"
                name="email"
                type="email"
                onChange={handleChange}
                required
              />
              <InputWithLabel
                label="Password*"
                name="password"
                type="password"
                onChange={handleChange}
                required
              />

              <InputWithLabel
                label="Phone Number*"
                name="phoneNumber"
                type="phonenumber"
                onChange={handleChange}
                required
              />
            </DivTwo>
            <DivThree>
              <h4>Billing</h4>
              <InputWithLabel
                label="Identity Card Number"
                name="identityCardNumber"
                onChange={handleChange}
              />
              <InputWithLabel label="Tax Number" name="taxNumber" onChange={handleChange} />
              <ParagraphAdd>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam odio sunt,
                  provident dolorem, mollitia obcaecati quisquam, voluptate optio commodi
                  repudiandae quae earum debitis eum error itaque quia nisi corrupti voluptatibus?
                </p>
              </ParagraphAdd>
              <ContainerButton2>
                <Button type="submit" background="#9e0059" text="Create Account" />
              </ContainerButton2>
              <ContainerButtonSubmit>
                <Button background="#9e0059" text="Submit" />
              </ContainerButtonSubmit>
            </DivThree>
          </ContainerDiv>
        </div>
      </FormContainer>
    </div>
  );
}

export default NewClient;
