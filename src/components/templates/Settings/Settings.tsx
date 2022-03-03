import React, { SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';
import face from '../../../assets/images/face2small.jpg';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import { Context } from '../../../providers/GeneralProvider';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 1rem;
  h3,
  h4 {
    text-align: left;
    margin: 1rem 0 0 0;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      margin-bottom: 1rem;
    }
  }
`;
const ContainerDiv = styled.div`
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    background: ${({ theme }) => theme.color.main1};
    display: flex;
    gap: 3rem;
    padding: 2rem 3rem;
    min-height: 500px;
    border: 2px solid black;
    border-radius: 0.6rem;
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
  justify-content: space-between;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;
const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
`;

function SignUp() {
  const { handleError } = useError();

  interface FormSignUp {
    name: string;
    email: string;
    password: string;
    newPassword: string;
    newPasswordRepeated: string;
    taxNumber: string;
    identityCardNumber: string | undefined;
  }

  const { userData, setUserData } = useContext(Context);

  const initialValue: FormSignUp = {
    name: userData.name,
    email: userData.email,
    password: '',
    newPassword: '',
    newPasswordRepeated: '',
    taxNumber: userData.taxNumber,
    identityCardNumber: userData.identityCardNumber
  };

  const { handleChange, inputs } = useForm(initialValue);

  const handleSubmitUserDataChange = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You try change your data with these inputs', inputs);
    const updateUserData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userData.token}`
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        if (res.status === 200) {
          handleError(resJSON.message || 'You changed data correctly', true);
          const { identityCardNumber, email, name, taxNumber } = resJSON;
          setUserData({ ...userData, identityCardNumber, email, name, taxNumber });
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
        handleError();
      }
    };
    updateUserData();
  };

  return (
    <FormContainer onSubmit={handleSubmitUserDataChange}>
      <div>
        <h3>Settings</h3>
        <ContainerDiv>
          <DivOne>
            <div>
              <HeadingAdd>
                <h4>User Details</h4>
              </HeadingAdd>
              <RoundedPhoto img={face} alt="face" width="250px" height="250px" />
            </div>
            <ContainerButton>
              <Button background="#1F313E" text="Upload Photo" />
            </ContainerButton>
          </DivOne>
          <DivTwo>
            <h4>Contact Information</h4>
            <InputWithLabel
              label="Name*"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
            />
            <InputWithLabel
              label="Email*"
              name="email"
              type="email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
            <InputWithLabel
              label="New Password"
              name="newPassword"
              type="password"
              value={inputs.newPassword}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Repeat New Password"
              name="newPasswordRepeated"
              type="password"
              value={inputs.newPasswordRepeated}
              onChange={handleChange}
            />
          </DivTwo>
          <DivThree>
            <div>
              <h4>Billing Information</h4>
              <InputWithLabel
                label="Identity Card Number"
                name="identityCardNumber"
                onChange={handleChange}
                value={inputs.identityCardNumber}
              />
              <InputWithLabel
                label="Tax Number"
                name="taxNumber"
                onChange={handleChange}
                value={inputs.taxNumber}
              />
              <InputWithLabel
                label="Password To Confirm Changes*"
                name="password"
                type="password"
                onChange={handleChange}
                value={inputs.password}
                required
              />
              <ParagraphAdd>
                <p />
              </ParagraphAdd>
            </div>
            <ContainerButton>
              <Button type="submit" background="#9e0059" text="Save Changes" />
            </ContainerButton>
          </DivThree>
        </ContainerDiv>
      </div>
    </FormContainer>
  );
}

export default SignUp;
