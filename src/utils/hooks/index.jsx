import { useState, useEffect } from 'react';
import { userId, isMocked } from '../../cfg';
import mockedData from '../../data/mockedData';
import sportSeeAPI from '../../api/sportSeeAPI';

const API_SRC = `/user/${userId}`;

const API_SRC_ACTIVITY = `/user/${userId}/activity`;
const API_SRC_AVERAGE = `/user/${userId}/average-sessions`;
const API_SRC_PERFORMANCE = `/user/${userId}/performance`;

const useAxios = () => {
  const [userData, setUserData] = useState('');

  const [userDataActivity, setUserDataActivity] = useState('');
  const [userDataAverage, setUserDataAverage] = useState('');
  const [userDataPerformance, setUserDataPerformance] = useState('');
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
      const responseActivity = await sportSeeAPI.get(API_SRC_ACTIVITY);
      const responseAverage = await sportSeeAPI.get(API_SRC_AVERAGE);
      const responsePerformance = await sportSeeAPI.get(API_SRC_PERFORMANCE);
      setUserData(response.data);
      setUserDataActivity(responseActivity.data);
      setUserDataAverage(responseAverage.data);
      setUserDataPerformance(responsePerformance.data);
      console.log('fetched API data PERFORMANCE', {
        response,
        responseActivity,
        responseAverage,
        responsePerformance,
      });
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
    // const response = await sportSeeAPI.get(API_SRC);
    //   const responseActivity = await sportSeeAPI.get(API_SRC_ACTIVITY);
    //   const responseAverage = await sportSeeAPI.get(API_SRC_AVERAGE);
    //   const responsePerformance = await sportSeeAPI.get(API_SRC_PERFORMANCE);
    //   setUserData(response.data);
    //   setUserDataActivity(responseActivity.data);
    //   setUserDataAverage(responseAverage.data);
    //   setUserDataPerformance(responsePerformance.data);
  };

  // custom hook returns value
  return {
    userData,
    userDataActivity,
    userDataAverage,
    userDataPerformance,
    isLoading,
    error,
  };
};

export default useAxios;
