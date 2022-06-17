import { useContext } from 'react';
import UserDataContext from '../../utils/context/UserDataContext';
import Error from '../../views/Error/Error';
import BarCart from '../Charts/BarChart/BarCart';
import LineChart from '../Charts/LineChart/LineChart';
import RadarChart2 from '../Charts/RadarChart/RadarChart';
import Loader from '../Loader/Loader';
import './Dashboard.scss';
import Burn from '../../assets/calories-icon.svg';
import Chicken from '../../assets/protein-icon.svg';
import Apple from '../../assets/carbs-icon.svg';
import Burger from '../../assets/fat-icon.svg';

import KeyDataListItem from '../KeyData/KeyDataListItem/KeyDataListItem';

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
        <p>Félicitations! Vous avez explosé vos objectifs hier👏 👏</p>
      </div>
      <div className="main-content">
        <div className="charts-wrapper">
          <div className="daily-activity">
            <BarCart />
          </div>
          <div className="squares-charts-container">
            <div className="square-chart--line">
              <h2>Durée moyenne des sessions</h2>
              <LineChart />
            </div>
            <div className="square-chart--radar">
              <RadarChart2 />
            </div>

            <div className="square-chart--goal">score objectif</div>
          </div>
        </div>
        <div className="nutrition-wrapper">
          <KeyDataListItem
            picture={Burn}
            number={userData.data.keyData.calorieCount}
            unit={'kCal'}
            type={'Calories'}
          />
          <KeyDataListItem
            picture={Chicken}
            number={userData.data.keyData.proteinCount}
            unit={'g'}
            type={'Protéines'}
          />
          <KeyDataListItem
            picture={Apple}
            number={userData.data.keyData.carbohydrateCount}
            unit={'g'}
            type={'Glucides'}
          />

          <KeyDataListItem
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
