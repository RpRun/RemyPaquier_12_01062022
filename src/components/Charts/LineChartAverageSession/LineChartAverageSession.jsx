import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import sportSeeAPI from '../../../api/sportSeeAPI';
// import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
import './LineChartAverageSession.scss';

const LineChartAverageSession = ({ userDataAverage, isLoading, error }) => {
  // const id = useParams();
  // const userId = id.userId;
  // const GetDataAverage = () => {
  //   const [userDataAverage, setUserDataAverage] = useState('');
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(false);

  //   useEffect(() => {
  //     // const userId = id.userId;
  //     //react axios get method
  //     const fetchUserData = async () => {
  //       try {
  //         // const response = await sportSeeAPI.get('/user/:userId');
  //         const responseAverage = await sportSeeAPI.get(
  //           `/user/${userId}/average-session`
  //         );
  //         // setUserData(response.data);

  //         // console.log('fetch async data', response.data);
  //         setUserDataAverage(responseAverage.data);

  //         console.log('fetch async data Average', responseAverage.data);

  //         setIsLoading(false);
  //       } catch (err) {
  //         setError(true);
  //         console.log(err.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     // console.log('userId', id.userId);
  //     fetchUserData();
  //   }, []);

  //   return {
  //     userDataAverage,
  //     isLoading,
  //     error,
  //   };
  // };

  // const { userDataAverage, isLoading, error } = GetDataAverage();

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
          width="100%"
          type="natural"
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
          interval="preserveStartEnd"
          dataKey="name"
          stroke="#FFFFFF"
          tickLine={false}
          axisLine={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAverageSession;
