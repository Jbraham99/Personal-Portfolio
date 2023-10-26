import React from "react";

import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <nav className="navbar row bg-dark">
        <div className="col-sm-6 text-white">
            <h2>Joseph Braham</h2>
            <p>Software Engineer</p>      
        </div>
        <div className="col-sm-6 row">
            <div className="col-sm-3"></div>
            <Link className="col col-sm-3" to="/About">
                <p>About</p>
            </Link>
            <Link className="col col-sm-3" to="/Projects">
                <p>Projects</p>
            </Link>
            <Link className="col col-sm-3" to="/Contact">
                <p>Contact</p>
            </Link>
        </div>
    </nav>
  );
}

export default Menu;