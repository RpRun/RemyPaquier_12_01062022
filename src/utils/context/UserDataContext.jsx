import { createContext } from 'react';
import useAxios from '../hooks';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const { userData, isLoading, error } = useAxios();

  return (
    <UserDataContext.Provider value={{ userData, isLoading, error }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
