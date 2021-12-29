import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/survey/42">Survey</Link>
      <Link to="/results">result</Link>
      <Link to="/freelancers">freelancers</Link>
    </nav>
  );
}

export default Header;
