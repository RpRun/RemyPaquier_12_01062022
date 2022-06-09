import { createContext, useState, useEffect } from 'react';
import sportSeeAPI from '../../api/sportSeeAPI';
import { userId } from '../../cfg';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  //react axios get method
  const fetchUserData = async () => {
    try {
      const response = await sportSeeAPI.get(
        'http://localhost:3000/user/' + userId
      );
      setUserData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <UserDataContext.Provider value={{ userData, isLoading }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
