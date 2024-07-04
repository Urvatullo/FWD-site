import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Urvatullo Atoev</h1>
      <nav>
        <Link to="/">About Me</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/comic-fetcher">Comic Fetcher</Link>
      </nav>
    </header>
  );
};

export default Header;
