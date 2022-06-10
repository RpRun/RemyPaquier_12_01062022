import { useState, useEffect } from 'react';
import { userId, isMocked } from '../../cfg';
import mockedData from '../../data/mockedData';
import sportSeeAPI from '../../api/sportSeeAPI';

const API_SRC = `/user/${userId}`;

const useAxios = () => {
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // set isMocked true or false in cfg.js to fetch data
  useEffect(() => {
    isMocked ? fetchMockedData() : fetchUserData();
  }, []);

  //react axios get method
  const fetchUserData = async () => {
    try {
      const response = await sportSeeAPI.get(API_SRC);
      setUserData(response.data);
      console.log('fetched API data', response.data);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // recupere json importé localement
  const fetchMockedData = () => {
    console.log('fetch mocked data', mockedData);
    setUserData(mockedData);
    setIsLoading(false);
  };

  // custom hook returns value
  return { userData, isLoading, error };
};

export default useAxios;
