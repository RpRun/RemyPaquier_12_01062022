import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import sportSeeAPI from '../../../api/sportSeeAPI';
// import UserDataContext from '../../../utils/context/UserDataContext';
import frTrad from '../../../utils/frTrad';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';

const RadarChartActivity = () => {
  const id = useParams();

  const GetDataPerformance = () => {
    const [userDataPerformance, setUserDataPerformance] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      const userId = id.userId;
      //react axios get method
      const fetchUserData = async () => {
        try {
          const responsePerformance = await sportSeeAPI.get(
            `/user/${userId}/performance`
          );

          setUserDataPerformance(responsePerformance.data);

          console.log('fetch async data PERF', responsePerformance.data);

          setIsLoading(false);
        } catch (err) {
          setError(true);
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchUserData();
    }, []);

    return {
      userDataPerformance,
      isLoading,
      error,
    };
  };

  const { userDataPerformance, isLoading, error } = GetDataPerformance();

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
