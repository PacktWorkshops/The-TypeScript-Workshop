import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="add">add</Link>
      </li>
      <li>
        <Link to="signin">signin</Link>
      </li>
      <li>
        <Link to="signup">signup</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
