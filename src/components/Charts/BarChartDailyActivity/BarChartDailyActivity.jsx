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

const BarChartDailyActivity = () => {
  const { userDataActivity, isLoading, error } = useContext(UserDataContext);
  console.log('bar chart', userDataActivity.data.sessions);

  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width="100%"
        height="100%"
        margin={{
          top: 11,
          right: 30,
          left: 30,
          bottom: 63,
        }}
        data={userDataActivity.data.sessions}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis dataKey="calories" />
        <Tooltip />
        <Legend
          verticalAlign="top"
          height={70}
          align="right"
          layout="horizontal"
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
          barSize={7}
          // background={{ fill: '#C4C4C4' }}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
          barSize={7}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartDailyActivity;
