import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';
const Home = () => {
  return (
    <main className="home-temporary-welcome">
      <h1>Quel utilisateur êtes vous?</h1>

      <Link className="top-nav--link" to="/cecilia/18/profile">
        <button>Cecilia</button>
      </Link>

      <Link className="top-nav--link" to="/karl/12/profile">
        <button>Karl</button>
      </Link>
    </main>
  );
};

export default Home;
