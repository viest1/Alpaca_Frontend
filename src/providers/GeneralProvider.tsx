import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useMemo,
  useState
} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Few examples of complex types
// type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
// const defaultUpdate: UpdateType()
// type SetValue<T> = Dispatch<SetStateAction<T>>

interface ContextType {
  example: boolean;
  setExample: Dispatch<SetStateAction<boolean>>;
  example2: boolean;
  setExample2: Dispatch<SetStateAction<boolean>>;
  userData: {
    token: string;
    role: string;
    email: string;
    userId: string;
    exp: any;
    name: string;
  };
  setUserData: Dispatch<
    SetStateAction<{
      token: string;
      role: string;
      email: string;
      userId: string;
      exp: any;
      name: string;
    }>
  >;
  // clientArray: [];
  // setClientArray: Dispatch<SetStateAction<string[]>>;
}

export const Context = createContext<ContextType>({
  example: false,
  setExample: () => undefined,
  example2: false,
  setExample2: () => undefined,
  userData: {
    token: '',
    role: '',
    email: '',
    name: '',
    exp: '',
    userId: ''
  },
  setUserData: () => undefined
  // clientArray: [],
  // setClientArray: Dispatch<SetStateAction<string[]>>,
});

function GeneralProvider({ children }: { children: ReactNode }): ReactElement {
  const [example, setExample] = useState<boolean>(false);
  const [example2, setExample2] = useLocalStorage('localStorageExample', true);
  const [userData, setUserData] = useLocalStorage('alpacaUserData', {
    token: '',
    role: '',
    email: '',
    name: '',
    exp: '',
    userId: ''
  });
  // const [clientArray, setClientArray] = useState([]);

  const value = useMemo(() => {
    return {
      example,
      setExample,
      example2,
      setExample2,
      userData,
      setUserData
    };
  }, [example, setExample, example2, setExample2, userData, setUserData]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default GeneralProvider;
