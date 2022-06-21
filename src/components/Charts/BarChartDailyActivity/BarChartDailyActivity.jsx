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
import './BarChartDailyActivity.scss';

// const getIntroOfPage = (label) => {
//   return '';
// };

const BarChartDailyActivity = () => {
  const { userDataActivity, isLoading, error } = useContext(UserDataContext);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}kg</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          <p className="desc">{`${payload[1].value}`}Kcal</p>
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
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            color: 'white',
            backgroundColor: '#E60000',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        />
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
