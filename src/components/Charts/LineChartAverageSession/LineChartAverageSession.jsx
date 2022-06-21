import { useContext } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
import './LineChartAverageSession.scss';

const LineChartAverageSession = () => {
  const { userDataAverage, isLoading, error } = useContext(UserDataContext);
  console.log('line-chart average-sessions', userDataAverage.data.sessions);

  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        data={userDataAverage.data.sessions}
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          fill="#000000"
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 5 }}
        />
        <Tooltip
          wrapperStyle={{
            width: 30,
            height: 30,
            backgroundColor: '#ccc',
            color: '#000000',
          }}
          color="#000000"
        />
        <XAxis dataKey="day" />
        <YAxis hide dataKey="sessionLength" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAverageSession;
