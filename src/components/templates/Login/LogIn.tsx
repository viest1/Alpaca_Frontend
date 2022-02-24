import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import Button from '../../atoms/Button/Button';
import './LogIn.css';

function LogIn() {
  return (
    <div className="login">
      <h3>LOGIN</h3>
      <InputWithLabel label="Email" name="email" />
      <InputWithLabel label="Password" name="password" />
      <p>I forgot my password</p>

      <div className="btn">
        <Button background="#2A9D8F" text="Login" />
        <div className="line" />
        <Button text="Login with Gmail" icon={<FcGoogle />} />
        <Button background="#9e0059" text="Create New Account" />
      </div>
    </div>
  );
}

export default LogIn;
