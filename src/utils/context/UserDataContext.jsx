import { createContext } from 'react';
import useAxios from '../hooks';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const {
    userData,
    userDataActivity,
    userDataAverage,
    userDataPerformance,
    isLoading,
    error,
  } = useAxios();

  return (
    <UserDataContext.Provider
      value={{
        userData,
        userDataActivity,
        userDataAverage,
        userDataPerformance,
        isLoading,
        error,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
