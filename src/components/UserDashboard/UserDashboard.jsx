/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const UserDashboard = ({ user }) => {
  return (
    <>
      <section className="container">
        <div className="intro-text text-center">
          <h1>PROFILE</h1>
        </div>
      </section>
      <section className="container mt-20">
        <div className="profile-container">
          <div className="profile-img col">
            <img src={user.passportUrl} alt="profile" />
          </div>
          <div className="profile col">
            <h3>{`${user.firstname} ${user.lastname}`}</h3>
            <p>
              Email:
              <span>{user.email}</span>
            </p>
          </div>
          <div className="actions col">
            <p>
              Do you have the intention of running for a government office? click the button below
            </p>
            <button type="button">CONTEST</button>
          </div>
        </div>
      </section>

      <section className="container mt-50">
        <h2>VOTING HISTORY</h2>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Office Type</th>
              <th>Office Name</th>
              <th>Party</th>
              <th>Logo</th>
              <th>Candidate</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>Yor currently habe no voting history</tbody>
        </table>
      </section>

      <footer className="text-center mt-20">
        <div className="container">
          <span>Copyright &copy; 2019 | Politico- An Andela Bootcamp Project</span>
        </div>
      </footer>
    </>
  );
};

export default UserDashboard;
