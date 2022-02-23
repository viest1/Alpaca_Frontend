import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import './SignUp.css';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import useForm from '../../../hooks/useForm';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 1rem;
  h3,
  h4 {
    text-align: center;
    margin: 0;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ContainerPhoto = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

function SignUp() {
  const [patrykVersion] = useState(true);
  //   <form
  //   onSubmit={(e: React.SyntheticEvent) => {
  //     e.preventDefault();
  //     const target = e.target as typeof e.target & {
  //       name: { value: string };
  //       surname: { value: string };
  //       email: { value: string };
  //       password: { value: string };
  //       repeatPassword: { value: string };
  //       phoneNumber: { value: number };
  //     };
  //     const email = target.email.value;
  //     const password = target.password.value;
  //   }}
  // >

  interface FormSignUp {
    name: string;
    email: string;
    password: string;
    id: string;
    taxNumber: string;
    identityCardNumber: string;
  }

  const initialValue: FormSignUp = {
    name: '',
    email: '',
    password: '',
    id: '',
    taxNumber: '',
    identityCardNumber: ''
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
            // Authorization: 'Bearer ' + userData?.token, // IN FUTURE TO AUTHORIZATION
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        console.log(resJSON);
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
      }
    };
    signup();
  };

  return (
    <div>
      {patrykVersion ? (
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <h3>CREATE NEW ACCOUNT</h3>
            <ContainerPhoto>
              <img src="" alt="" />
            </ContainerPhoto>
            <ContainerButton>
              <Button background="blue" text="Upload Photo" />
            </ContainerButton>
          </div>
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
          <h4>Billing Information</h4>
          <InputWithLabel
            label="Identity Card Number"
            name="identityCardNumber"
            onChange={handleChange}
          />
          <InputWithLabel label="Tax Number" name="taxNumber" onChange={handleChange} />
          <ContainerButton>
            <Button type="submit" background="#2A9D8F" text="Create Account" />
          </ContainerButton>
        </FormContainer>
      ) : (
        <div className="container">
          <div>
            <div className="first-div">
              <h3 className="new-contact">CREATE NEW ACCOUNT</h3>
              <ContainerPhoto className="photo">
                <p>Photo</p>
                <img className="img" src="" alt="" />
              </ContainerPhoto>
              <div className="btn">
                <Button background="blue" text="Upload Photo" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="billing">Billing Information</h2>
            <div>
              <InputWithLabel label="Id" name="id" />
              <div className="second-div">
                <h4>Contact Information</h4>
                <div className="flex-container">
                  <InputWithLabel label="Name" name="name" placeholder="Give your Name" />
                  <InputWithLabel label="Surname" name="surname" />
                  <InputWithLabel label="Email" name="email" />
                  <InputWithLabel label="Password" name="password" />
                </div>
              </div>
              <div className="flex-container">
                <h4 className="billing">Billing Information</h4>
                <InputWithLabel label="Id" name="id" />
                <InputWithLabel label="Tax Number" name="taxnumber" />
                <div className="btn1">
                  <Button background="#2A9D8F" text="Create Account" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
