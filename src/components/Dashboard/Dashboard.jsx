import { useContext } from 'react';
import UserDataContext from '../../utils/context/UserDataContext';
// import GetData from '../../utils/GetData';
import Aside from '../Aside/Aside';
import './Dashboard.scss';

const Dashboard = () => {
  const { userData, isLoading } = useContext(UserDataContext);
  if (!isLoading && !userData && userData.length === 0) {
    return <p>Ca charge pas</p>;
  }
  console.log('data qui charge', userData);
  return isLoading ? (
    <h1>ca charge</h1>
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
