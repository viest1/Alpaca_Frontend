import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 1rem;
  s h3,
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

    border: 2px solid black;
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

function SignUp() {
  const { handleError } = useError();

  interface FormSignUp {
    name: string;
    email: string;
    password: string;
    id: string;
    taxNumber: string;
    identityCardNumber: string | undefined;
  }

  const initialValue: FormSignUp = {
    name: '',
    email: '',
    password: '',
    id: '',
    taxNumber: '',
    identityCardNumber: undefined
  };

  const { handleChange, inputs } = useForm(initialValue);
  console.log(inputs);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You try submit these inputs', inputs);
    const signup = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        console.log(resJSON);
        if (res.status === 201) {
          handleError(
            resJSON.message || 'You created account correctly, now verify your email',
            true
          );
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
        handleError();
      }
    };
    signup();
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <h3>CREATE NEW ACCOUNT</h3>
          <ContainerDiv>
            <DivOne>
              <HeadingAdd>
                <h4>User Details</h4>
              </HeadingAdd>
              <ContainerPhoto>
                <img src="" alt="" />
              </ContainerPhoto>
              <ContainerButton>
                <Button background="#1F313E" text="Upload Photo" />
              </ContainerButton>
            </DivOne>
            <DivTwo>
              <h4>Contact Information</h4>
              <InputWithLabel
                label="Name*"
                name="name"
                placeholder="Give your Name"
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
            </DivTwo>
            <DivThree>
              <h4>Billing Information</h4>
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

export default SignUp;
