import { useContext } from 'react';
import { Context } from '../providers/GeneralProvider';

export default function useError() {
  const { setMyError } = useContext(Context);
  const handleError = (message = '1', condition = false) => {
    setMyError({
      message,
      success: condition,
      successMessage: message
    });
  };
  return {
    handleError
  };
}
