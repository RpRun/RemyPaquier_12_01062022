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
          top: 80,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        // padding={{ right: 30, left: 30 }}
        strokeOpacity="50%"
        data={formatedData()}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector('.square-chart--line');
            let windowWidth = div.clientWidth;
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            );

            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, 	rgba(209, 1, 2,1) 100%)`;
          }
        }}
      >
        <Line
          // strokeOpacity="50%"
          allowDataOverflow={true}
          width="100%"
          type="monotone"
          dataKey="session"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
          activeDot={{
            r: 5,
            stroke: '#FFFFFF',
            strokeWidth: 8,
            strokeOpacity: 0.4,
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <YAxis hide />

        <XAxis
          allowDataOverflow={true}
          // padding={{ left: 10, right: 10 }}
          interval="preserveStartEnd"
          dataKey="name"
          stroke="#FFFFFF"
          tickLine={false}
          axisLine={false}

          // strokeOpacity="50%"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAverageSession;
