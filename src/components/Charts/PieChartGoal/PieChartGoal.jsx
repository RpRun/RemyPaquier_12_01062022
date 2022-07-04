import { useContext } from 'react';
import {
  Legend,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
import './PieChartGoal.scss';

const PieChartGoal = () => {
  const { userData, isLoading, error } = useContext(UserDataContext);
  // console.log('data pie', userData.data.score.value);
  const score = userData.data.todayScore
    ? userData.data.todayScore * 100
    : userData.data.score * 100;
  const todayScore = [
    {
      name: `${score}% de votre objectif`,
      value: score,
    },
  ];
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
        startAngle={180}
        endAngle={-180}
        innerRadius={85}
        outerRadius={100}
        barSize={10}
        data={todayScore}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

        <RadialBar minAngle={0} fill="red" cornerRadius="50%" dataKey="value" />
        <Legend
          wrapperStyle={{
            backgroundColor: 'white',
            borderRadius: '50%',
            height: '159px',
            width: '159px',
            transformOrigin: '0px 0px',
          }}
          iconSize={0}
          layout="vertical"
          verticalAlign="middle"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default PieChartGoal;
