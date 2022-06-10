import { useContext } from 'react';
import UserDataContext from '../../utils/context/UserDataContext';
import Error from '../../views/Error/Error';
// import GetData from '../../utils/GetData';
import Aside from '../Aside/Aside';
import Loader from '../Loader/Loader';
import './Dashboard.scss';

const Dashboard = () => {
  const { userData, isLoading, error } = useContext(UserDataContext);
  // if (!isLoading && !userData && userData.length === 0) {
  if (error) {
    return <Error />;
  }
  console.log('data qui charge', userData);
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main-profile">
      <Aside />
      <div className="header-like">
        <h2>
          Bonjour{' '}
          <span className="user-firstname">
            {userData.data.userInfos.firstName}
          </span>
        </h2>
        <p>Félicitations! Vous avez explosé vos objectifs hier</p>
      </div>
      <p>{userData.data.todayScore};</p>
      <p>{userData.data.userInfos.firstName}</p>
      <p>{userData.data.keyData.calorieCount}</p>
    </main>
  );
};

export default Dashboard;
