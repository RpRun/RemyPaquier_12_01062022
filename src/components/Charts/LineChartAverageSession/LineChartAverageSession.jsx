import { useContext } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
import './LineChartAverageSession.scss';

const LineChartAverageSession = () => {
  const { userDataAverage, isLoading, error } = useContext(UserDataContext);

  const GetDayOfWeek = (index) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[index - 1];
  };

  const formatedData = () => {
    const sessions = userDataAverage.data.sessions;
    return sessions.map((session) => {
      return {
        name: GetDayOfWeek(session.day),
        session: session.sessionLength,
      };
    });
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="session-duration">{`${payload[0].value}`} min</p>
        </div>
      );
    }
    return null;
  };

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
        data={formatedData()}
      >
        <Line
          type="monotone"
          dataKey="session"
          stroke="#000000"
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 5 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <YAxis hide />

        <XAxis
          dataKey="name"
          color="#000000"
          tickLine={false}
          axisLine={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAverageSession;
