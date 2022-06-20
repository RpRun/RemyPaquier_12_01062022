import React, { useContext } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';

const RadarChartActivity = () => {
  const { userDataPerformance, userData, isLoading, error } =
    useContext(UserDataContext);
  console.log('radar chart', userDataPerformance.data.data);
  console.log('radar-chart KIND', userDataPerformance.data.kind);
  console.log('radar-chart userData KIND', userData.data.kind);

  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        fill="#FFFFFF"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={userDataPerformance.data.data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis />
        <PolarRadiusAxis dataKey="kind" angle={60} domain={[0, 300]} />
        <Radar
          name="performances"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartActivity;
