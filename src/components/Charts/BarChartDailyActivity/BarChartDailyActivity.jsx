import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
} from 'recharts';

import React, { useContext } from 'react';
import UserDataContext from '../../../utils/context/UserDataContext';
import Loader from '../../Loader/Loader';
import Error from '../../../views/Error/Error';
import './BarChartDailyActivity.scss';

const BarChartDailyActivity = () => {
  const { userDataActivity, isLoading, error } = useContext(UserDataContext);

  const maxWeight = userDataActivity.data.sessions.reduce(
    (prev, current) => Math.max(prev, current.kilogram),
    0
  );
  const minWeight = userDataActivity.data.sessions.reduce(
    (prev, current) => Math.min(prev, current.kilogram),
    maxWeight
  );

  const minCal = userDataActivity.data.sessions.reduce(
    (prev, current) => Math.min(prev, current.calories),
    0
  );
  const maxCal = userDataActivity.data.sessions.reduce(
    (prev, current) => Math.max(prev, current.calories),
    0
  );

  const weightDomain = maxWeight - minWeight + 1;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilos">{`${payload[0].value}`}kg</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          <p className="calories">{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }
    // const dateDomain = userDataActivity.data.sessions.reduce(
    //   (prev, current) => Math.max(prev, current.day),
    //   0
    // );
    // console.log('date', dateDomain);
    // const CustomAxisX = () => {
    //   userDataActivity.data.sessions.day.map((date, index) =>
    //   )
    // }

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
        barGap={10}
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
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          stroke="#9B9EAC"
          tickLine={false}
          dy={15.5}
          dataKey="day"
          // content={<CustomAxisX />}
          // dataKey={userDataActivity.data.sessions}
        />

        {/* <YAxis content={<CustomWeightAxis />} /> */}

        <YAxis
          yAxisId="right"
          allowDecimals={false}
          stroke="#9B9EAC"
          tickSize={weightDomain}
          orientation="right"
          domain={[minWeight - 1, maxWeight + 1]}
          axisLine={false}
          tickLine={false}
          dataKey="kilogram"
          allowDataOverflow={true}
          dx={20}
        />

        <YAxis
          hide={true}
          yAxisId="left"
          stroke="#9B9EAC"
          orientation="left"
          domain={[minCal, maxCal + 20]}
          tickLine={true}
          axisLine={true}
          dataKey="calories"
        />

        <Tooltip
          cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          content={<CustomTooltip />}
          position={{ y: -1 }}
          wrapperStyle={{
            color: 'white',
            backgroundColor: '#E60000',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
          onHover={{ fill: '#C4C4C4' }}
        />
        <Legend
          fill="#E60000"
          iconType="circle"
          verticalAlign="top"
          height={70}
          align="right"
          layout="horizontal"
        />
        <Bar
          yAxisId="right"
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
          barSize={7}
          // background={{ fill: '#C4C4C4' }}
        />
        <Bar
          yAxisId="left"
          name="Calories brûlées (Kcal)"
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
