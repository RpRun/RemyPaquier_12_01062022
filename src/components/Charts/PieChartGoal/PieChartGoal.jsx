import React, { useContext } from 'react';
import {
  Legend,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';

const PieChartGoal = () => {
  const { userData, isLoading, error } = useContext(UserDataContext);
  console.log('data pie', userData.data.score);

  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={userData.data}
        fill="blue"
      >
        <RadialBar
          minAngle={15}
          //   label={{ position: 'insideStart', fill: '#E60000' }}
          //   background
          clockWise
          dataKey="score"
          fill="blue"
          stroke="black"
        />
        <RadialBar
          minAngle={60}
          label={{ position: 'insideStart', fill: '#020203' }}
          //   background
          //   clockWise
          //   dataKey={100}
        />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default PieChartGoal;
