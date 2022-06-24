import { useContext } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  CartesianAxis,
} from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
import './LineChartAverageSession.scss';

const getDayOfWeek = (label) => {
  if (label === 1) {
    return 'L';
  }
  if (label === 2) {
    return 'M';
  }
  if (label === 3) {
    return 'M';
  }
  if (label === 4) {
    return 'J';
  }
  if (label === 5) {
    return 'V';
  }
  if (label === 6) {
    return 'S';
  }
  if (label === 7) {
    return 'D';
  }
  return '';
};

const CustomLegendWithDays = ({ label }) => {
  console.log('label legend day', label);

  return (
    <div className="custom-xAxis-Legend">
      <p className="xAxis-Days-Legend">{getDayOfWeek(label)}</p>
    </div>
  );
};

// :any ? Typescript CustomLegendWithDays = ({active, payload, label}:any)
// const CustomLegendWithDays = ({ label }) => {
//   return <div className="custom-xAxis-Legend">{getDayOfWeek(label)}</div>;
// };

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
        <YAxis hide />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          // content={<CustomLegendWithDays />}
        />
        {/* <CartesianAxis content={<CustomLegendWithDays />} /> */}
        {/* <YAxis hide dataKey="sessionLength" /> */}
        <Legend content="minutes" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAverageSession;
