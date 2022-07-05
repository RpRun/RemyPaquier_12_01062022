import React, { useContext } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import frTrad from '../../../utils/frTrad';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';

const RadarChartActivity = () => {
  const { userDataPerformance, isLoading, error } = useContext(UserDataContext);
  console.log('radar chart', userDataPerformance.data.data);
  console.log('radar-chart KIND', [userDataPerformance.data.kind]);

  const GetActivityKind = (index) => {
    const activityKind = userDataPerformance.data.kind;

    return frTrad[activityKind[index]];
  };

  const formatedData = () => {
    const activities = userDataPerformance.data.data;
    return activities.map((activity) => {
      return {
        name: GetActivityKind(activity.kind),
        value: activity.value,
      };
    });
  };

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
        outerRadius="65%"
        fontSize="12px"
        data={formatedData().reverse()}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="name" />
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
