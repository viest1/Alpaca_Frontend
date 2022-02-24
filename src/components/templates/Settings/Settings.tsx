import React, { useContext } from 'react';
import { Context } from '../../../providers/GeneralProvider';
import Button from '../../atoms/Button/Button';

function Settings() {
  const { setUserData } = useContext(Context);
  const handleLogout = () => {
    setUserData({ token: '', role: '', email: '', name: '', exp: '', userId: '' });
  };
  return (
    <div>
      <h2>Settings</h2>
      <Button text="Logout" onClick={handleLogout} />
    </div>
  );
}

export default Settings;
