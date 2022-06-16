import { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
import './LineChart.scss';

const LineChart1 = () => {
  const { userDataAverage, isLoading, error } = useContext(UserDataContext);
  console.log('chart', userDataAverage.data.sessions);

  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={userDataAverage.data.sessions}>
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
        <XAxis dataKey="day" />
        <YAxis dataKey="sessionLength" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChart1;
