import { createContext, useState, useEffect } from 'react';
import sportSeeAPI from '../../api/sportSeeAPI';
import { userId } from '../../cfg';
import mockedData from '../../data/mockedData';

const UserDataContext = createContext();
const API_SRC = 'http://localhost:3000/user/' + userId;
const MOCKED_DATA = 'http://localhost:3000/user';
// 'http://localhost:3001/user/' + userId;
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  //react axios get method
  const fetchUserData = async () => {
    try {
      const response = await sportSeeAPI.get(MOCKED_DATA);
      setUserData(response.data);
      console.log('fetched data', response.data);
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
