/* import React from 'react';
import classes from './Header.module.css'

function Header() {
  return <header className={classes.header}>
      <h1>Header</h1>
    </header>
  
}

export default Header;
 */

import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <h1>Header Component</h1>
    </header>
}
export default Header;