import React, { SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import Button from '../../atoms/Button/Button';
import './LogIn.css';
import useForm from '../../../hooks/useForm';
import { Context } from '../../../providers/GeneralProvider';

const Container = styled.form`
  padding: 0 1rem;
  max-width: 350px;
  margin: 0 auto;

  h3 {
    text-align: center;
  }
  p {
    margin: 0.4rem 0 1rem 0;
    text-align: right;
    display: inline-block;
  }
  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    max-width: 350px;
  }
`;

const ContainerP = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Line = styled.div`
  width: 230px;
  height: 2px;
  background-color: #666;
`;

function LogIn() {
  const { setUserData } = useContext(Context);
  interface FormLogin {
    email: string;
    password: string;
  }
  const navigate = useNavigate();

  const initialValue: FormLogin = {
    email: '',
    password: ''
  };

  const { handleChange, inputs } = useForm(initialValue);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You try login with these inputs', inputs);
    const login = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // Authorization: 'Bearer ' + userData?.token, // IN FUTURE TO AUTHORIZATION
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        console.log(resJSON);
        if (res.status === 200) {
          setUserData(resJSON);
          navigate('/');
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
      }
    };
    login();
  };

  const handleNavigateToForgotPassword = () => {
    navigate('/forgotPassword');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h3>LOGIN</h3>
      <InputWithLabel label="Email" name="email" onChange={handleChange} />
      <InputWithLabel type="password" label="Password" name="password" onChange={handleChange} />
      <ContainerP>
        <p onClick={handleNavigateToForgotPassword}>I forgot my password</p>
      </ContainerP>
      <div>
        <Button type="submit" background="#2A9D8F" text="Login" />
        <Line />
        <Button text="Login with Gmail" icon={<FcGoogle />} />
        <Button background="#9e0059" text="Create New Account" />
      </div>
    </Container>
    // <div className="login">
    //   <h3 className="h3">LOGIN</h3>
    //   <InputWithLabel label="Email" name="email" />
    //   <InputWithLabel label="Password" name="password" />
    //   <p className="p">I forgot my password</p>
    //   <div className="btn">
    //     <Button background="#2A9D8F" text="Login" />
    //     <div className="line" />
    //     <Button text="Login with Gmail" icon={<FcGoogle />} />
    //     <Button background="#9e0059" text="Create New Account" />
    //   </div>
    // </div>
  );
}

export default LogIn;
