import React from 'react';
import classes from './Header.module.sass';
import { NavLink } from 'react-router-dom';

const Header = ({ onServiceChange }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <NavLink className="navbar-brand" to="/">
            StarWars
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {/* <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Main<span className="sr-only">(current)</span>
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/people/">
                  People
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/planets/">
                  Planets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/starships/">
                  Starships
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login/">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/secret/">
                  SecretPage
                </NavLink>
              </li>
            </ul>
            <button
              className={`btn btn-pimary btn-sm ${classes.button}`}
              onClick={onServiceChange}
            >
              Change API
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// <nav
// className={`navbar navbar-dark navbar-expand-lg header-navbar ${
//   classes.Header
// }`}
// >
// <h3>
//   <NavLink
//     to="/"
//     exact
//     className="navbar-brand"
//     activeClassName={classes.active}
//   >
//     Star DB
//   </NavLink>
// </h3>
// <ul className="d-flex">
//   <li>
//     <NavLink to="/people/" activeClassName={classes.active}>
//       People
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/planets/" activeClassName={classes.active}>
//       Planets
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/starships/" activeClassName={classes.active}>
//       Starships
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/login" activeClassName={classes.active}>
//       LoginPage
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/secret" activeClassName={classes.active}>
//       Secret
//     </NavLink>
//   </li>
// </ul>
// <button
//   className={`btn btn-pimary btn-sm ${classes.button}`}
//   onClick={onServiceChange}
// >
//   Change API
// </button>
// </nav>
