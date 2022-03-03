import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../providers/GeneralProvider';

export const useAuth = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(Context);
  // const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleLogout = () => {
    setUserData({
      userId: '',
      token: '',
      name: '',
      exp: '',
      role: '',
      email: '',
      identityCardNumber: '',
      taxNumber: ''
    });
    navigate('/');
  };

  return {
    handleLogout
  };
};
