/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';
import logo from './logo.png';
import { logout } from '../../actions/authentication';

export const Navbar = ({ loggedIn, logoutHandler, user }) => {
  return (
    <>
      <nav className="navbar container">
        <div className="navbar-brand">
          <NavLink href="index.html" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <label className="navbar_toggle" htmlFor="toggle" id="nav-icon">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />
        {loggedIn ? (
          <ul className="navbar-menu">
            {user.isAdmin ? (
              <>
                <li>
                  <NavLink to="/admin-dashboard" href="admin.html" className="active">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/createparty" href="create-party.html">
                    Create Party
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/createoffice" href="create-office.html">
                    Create Office
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/user-dashboard" href="admin.html" className="active">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/parties" href="create-party.html">
                    Political parties
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vote" href="create-office.html">
                    Vote
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/results" href="create-office.html">
                    Election Results
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink onClick={logoutHandler} to="/login" href="login.html">
                Logout
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-menu">
            <li>
              <NavLink to="/" href="index.html">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" href="signup.html">
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" href="login.html">
                LogIn
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

function mapStateToProps(state) {
  const { loggedIn } = state.login;
  const { user } = state.login.user || {};
  return {
    loggedIn,
    user
  };
}

const mapDispatchToProps = {
  logoutHandler: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
