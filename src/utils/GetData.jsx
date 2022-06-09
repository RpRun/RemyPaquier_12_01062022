import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { userId } from '../cfg';
// import MOCKED_DATA from '../utils/data/mockedData.js';

const MOCKED_DATA = '../utils/data/mockedData.js';

const API_URL = 'http://localhost:3000/user/' + userId;

// At the beginning, no user data
const GetData = () => {
  const [userData, setUserData] = useState(null);

  // Define the function that fetches the data from the API
  // You can use API_URL or MOCKED_DATA
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setUserData(data);
    console.log('data:', data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);
  console.log('userData', userData);
  if (!userData) {
    return <div>loadiiing.....</div>;
  }
  return (
    <div className="wrapper">
      <h2>{userData.data.id}</h2>
      <p>bonjour {userData.data.userInfos.firstName}</p>
    </div>
  );
};

export default GetData;
