import { useContext, useState } from 'react';
import UserDataContext from '../../utils/context/UserDataContext';
import Error from '../../views/Error/Error';
import Loader from '../Loader/Loader';
import './Dashboard.scss';
import Burn from '../../assets/calories-icon.svg';
import Chicken from '../../assets/protein-icon.svg';
import Apple from '../../assets/carbs-icon.svg';
import Burger from '../../assets/fat-icon.svg';
import KeyData from '../KeyData/KeyData';
import LineChartAverageSession from '../Charts/LineChartAverageSession/LineChartAverageSession';
import RadarChartActivity from '../Charts/RadarChartActivity/RadarChartActivity';
import BarChartDailyActivity from '../Charts/BarChartDailyActivity/BarChartDailyActivity';
import PieChartGoal from '../Charts/PieChartGoal/PieChartGoal';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import sportSeeAPI from '../../api/sportSeeAPI';
// import USER_MAIN_DATA from '../../data/mockedData';
// import PropTypes from 'prop-types';
const Dashboard = () => {
  const id = useParams();
  const userId = id.userId;
  console.log('userId', id);
  console.log('params id', id.userId);
  // const location = useLocation();
  // console.log('locATION', location);

  const [userData, setUserData] = useState('');

  const [userDataActivity, setUserDataActivity] = useState('');
  const [userDataAverage, setUserDataAverage] = useState('');
  const [userDataPerformance, setUserDataPerformance] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await sportSeeAPI.get(`/user/${userId}`);

      const responseActivity = await sportSeeAPI.get(
        `/user/${userId}/activity`
      );

      const responseAverage = await sportSeeAPI.get(
        `/user/${userId}/average-sessions`
      );
      const responsePerformance = await sportSeeAPI.get(
        `/user/${userId}/performance`
      );

      setUserData(response.data);

      setUserDataActivity(responseActivity.data);
      setUserDataAverage(responseAverage.data);
      setUserDataPerformance(responsePerformance.data);

      console.log('fetch async MAIN data', response.data);

      setIsLoading(false);
    } catch (err) {
      setError(true);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
    return {
      userData,
      userDataActivity,
      userDataAverage,
      userDataPerformance,
      isLoading,
      error,
    };
  };
  useEffect(() => {
    //react axios get method

    fetchUserData();
  }, []);

  // if (id === userID)
  // console.log('userData ID', userData.data.id);
  // const error = !isLoading && !userData && userData.length === 0;
  if (error) {
    return <Error />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main-profile">
      <div className="header-like">
        <h2>
          Bonjour{' '}
          <span className="user-firstName">
            {userData.data.userInfos.firstName}
          </span>
        </h2>
        <p>Félicitations! Vous avez explosé vos objectifs hier👏</p>
      </div>
      <div className="main-content">
        <div className="charts-wrapper">
          <div className="daily-activity">
            <h3>Activité quotidienne</h3>
            {/* <BarChartDailyActivity {...{ userDataActivity }} /> */}
            <BarChartDailyActivity {...{ userDataActivity }} />
          </div>
          <div className="squares-charts-container">
            <div className="square-chart--line">
              <h3>
                Durée moyenne des <br /> sessions
              </h3>
              <LineChartAverageSession {...{ userDataAverage }} />
            </div>
            <div className="square-chart--radar">
              <RadarChartActivity
                {...{ userDataPerformance, isLoading, error }}
              />
            </div>

            <div className="square-chart--goal">
              <PieChartGoal {...{ userData }} />
              <h3>Score</h3>
            </div>
          </div>
        </div>
        <div className="nutrition-wrapper">
          <KeyData
            picture={Burn}
            number={userData.data.keyData.calorieCount.toLocaleString('en-US')}
            unit={'kCal'}
            type={'Calories'}
          />
          <KeyData
            picture={Chicken}
            number={userData.data.keyData.proteinCount}
            unit={'g'}
            type={'Protéines'}
          />
          <KeyData
            picture={Apple}
            number={userData.data.keyData.carbohydrateCount}
            unit={'g'}
            type={'Glucides'}
          />
          <KeyData
            picture={Burger}
            number={userData.data.keyData.lipidCount}
            unit={'g'}
            type={'Lipides'}
          />
        </div>
      </div>
    </main>
  );
};
// KeyData.propTypes = {
//   picture: PropTypes.number.isRequired,
//   number: PropTypes.string,
//   type: PropTypes.string,
// };

export default Dashboard;
