import { useContext } from 'react';

import UserDataContext from '../../utils/context/UserDataContext';
import Error from '../../views/Error/Error';
import BarCart from '../Charts/BarChart/BarCart';
import LineChart from '../Charts/LineChart/LineChart';
import RadarChart2 from '../Charts/RadarChart/RadarChart';
import Loader from '../Loader/Loader';
import './Dashboard.scss';
import Burn from '../../assets/calories-icon.svg';

import KeyDataListItem from '../KeyData/KeyDataListItem/KeyDataListItem';

const Dashboard = () => {
  const { userData, isLoading, error } = useContext(UserDataContext);
  console.log('keyData', userData.data.keyData.calorieCount);
  // if (!isLoading && !userData && userData.length === 0) {
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
          type={'Calories'}
        />
        <KeyDataListItem
          img={Burn}
          number={userData.data.keyData.proteinCount}
          type={'Protéines'}
        />
        <KeyDataListItem
          img={`Burn`}
          number={userData.data.keyData.carbohydrateCount}
          type={'glucides'}
        />
        <KeyDataListItem
          img={'../../assets/burn.svg'}
          number={userData.data.keyData.lipidCount}
          type={'Lipides'}
        />
      </div>
    </main>
  );
};

export default Dashboard;
