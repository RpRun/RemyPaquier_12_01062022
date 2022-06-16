import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import React, { useContext } from 'react';
import UserDataContext from '../../../utils/context/UserDataContext';
import Loader from '../../Loader/Loader';
import Error from '../../../views/Error/Error';

const BarCart = () => {
  const { userDataActivity, isLoading, error } = useContext(UserDataContext);
  // console.log('bar chart', userDataActivity.data.sessions);

  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={userDataActivity.data.sessions}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="userDataActivity.data.sessions.day" />
        {/* <YAxis dataKey="userDataActivity.data.sessions.kilogram" /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCart;
