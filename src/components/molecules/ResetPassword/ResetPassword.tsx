import React, { SyntheticEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import useForm from '../../../hooks/useForm';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import useError from '../../../hooks/useError';

function VerifyEmail() {
  const { handleError } = useError();
  const { token } = useParams();
  const navigate = useNavigate();
  interface Form {
    password: string;
  }
  const initialValue: Form = {
    password: ''
  };
  const { inputs, handleChange } = useForm(initialValue);
  const handleResetPassword = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Your New Password', inputs.password);
    const resetPassword = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/resetPassword`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        console.log(resJSON);
        if (res.status === 200) {
          navigate('/login');
          handleError(resJSON.message, true);
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
        handleError();
      }
    };
    resetPassword();
  };
  return (
    <div>
      <InputWithLabel
        type="password"
        label="Your New Password"
        name="password"
        onChange={handleChange}
      />
      <Button text="Submit" onClick={handleResetPassword} />
    </div>
  );
}

export default VerifyEmail;
