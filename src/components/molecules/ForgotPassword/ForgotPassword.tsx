import React, { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import useForm from '../../../hooks/useForm';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';

function VerifyEmail() {
  const navigate = useNavigate();
  interface Form {
    email: string;
  }
  const initialValue: Form = {
    email: ''
  };
  const { inputs, handleChange } = useForm(initialValue);
  const handleSendLinkToResetPassword = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You want have email with link to reset password on this email', inputs.email);
    const sendLinkToResetPassword = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/resetPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        console.log(resJSON);
        if (res.status === 200) {
          navigate('/login');
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
      }
    };
    sendLinkToResetPassword();
  };
  return (
    <div>
      <InputWithLabel type="email" label="Your Email" name="email" onChange={handleChange} />
      <Button text="Submit" onClick={handleSendLinkToResetPassword} />
    </div>
  );
}

export default VerifyEmail;
