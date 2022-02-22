import React from 'react';
import styled from 'styled-components';

import Header from '../../organisms/Header/Header';
import Button from '../../atoms/Button/Button';
import './SignUp.css';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';

const ContainerPhoto = styled.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SignUp() {
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

  return (
    <div className="sign-up">
      <Header />
      <div className="container">
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
  );
}

export default SignUp;
