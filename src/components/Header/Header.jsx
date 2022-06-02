import React from 'react';
import Nav from '../Nav/Nav';
import logo from '../../assets/logo-SportSee.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="running man" />
        <h1>SportSee</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
