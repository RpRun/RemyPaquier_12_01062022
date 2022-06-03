import React from 'react';
import TopMenu from '../Menu/TopMenu/TopMenu';
import logo from '../../assets/logo-SportSee.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-link" to="/">
        <img src={logo} alt="running man" />
        <h1>SportSee</h1>
      </Link>
      <TopMenu />
    </header>
  );
};

export default Header;
