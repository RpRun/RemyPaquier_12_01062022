import { createContext, useState, useEffect } from 'react';
import sportSeeAPI from '../../api/sportSeeAPI';
import { userId } from '../../cfg';
import mockedData from '../../data/mockedData';

const UserDataContext = createContext();
const API_SRC = `http://localhost:3000/user/${userId}`;

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isMocked = true;
    isMocked ? fetchMockedData() : fetchUserData();
  }, []);

  //react axios get method
  const fetchUserData = async () => {
    try {
      const response = await sportSeeAPI.get(API_SRC);
      setUserData(response.data);
      console.log('fetched data', response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // recupere json importé localement
  const fetchMockedData = () => {
    console.log('fetchmockeddata', mockedData);
    setUserData(mockedData);
    setIsLoading(false);
  };

  return (
    <UserDataContext.Provider value={{ userData, isLoading }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
