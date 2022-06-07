import React from 'react';
import Aside from '../Aside/Aside';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <main className="main-profile">
      <Aside />
      <div className="header-like">
        <h2>
          Bonjour <span className="user-firstname">toto</span>
        </h2>
        <p>Félicitations! Vous avez explosé vos objectifs hier</p>
      </div>
    </main>
  );
};

export default Dashboard;
