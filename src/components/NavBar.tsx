import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link to="/users">Users</Link> | <Link to="/products">Products</Link>
    </nav>
  );
};

export default NavBar;
