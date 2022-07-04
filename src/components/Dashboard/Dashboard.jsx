import { useContext } from 'react';
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

const Dashboard = () => {
  const { userData, isLoading } = useContext(UserDataContext);
  const error = !isLoading && !userData && userData.length === 0;
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
            <BarChartDailyActivity />
          </div>
          <div className="squares-charts-container">
            <div className="square-chart--line">
              <h3>
                Durée moyenne des <br /> sessions
              </h3>
              <LineChartAverageSession />
            </div>
            <div className="square-chart--radar">
              <RadarChartActivity />
            </div>

            <div className="square-chart--goal">
              <PieChartGoal />
              <h3>Score</h3>
            </div>
          </div>
        </div>
        <div className="nutrition-wrapper">
          <KeyData
            picture={Burn}
            number={userData.data.keyData.calorieCount}
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

export default Dashboard;
