import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../providers/GeneralProvider';
import Button from '../../atoms/Button/Button';

function Logout() {
  const { setUserData } = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUserData({ token: '', role: '', email: '', name: '', exp: '', userId: '' });
    navigate('/');
  };
  return (
    <div>
      <h2>Logout</h2>
      <Button text="Logout" onClick={handleLogout} />
    </div>
  );
}

export default Logout;
