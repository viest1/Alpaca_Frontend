import React, { SyntheticEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const handleVerifyEmail = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You try verify Email with this token', token);
    const verifyEmail = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/verifyEmail`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
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
    verifyEmail();
  };
  return (
    <div>
      <Button text="Verify Email" onClick={handleVerifyEmail} />
    </div>
  );
}

export default VerifyEmail;
