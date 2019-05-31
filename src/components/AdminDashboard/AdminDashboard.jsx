import React, { useEffect, useState } from 'react';

let tableBodyContent;

const AdminDashboard = ({ fetchPartiesHandler, parties }) => {
  useEffect(() => {
    fetchPartiesHandler();
  }, []);
  return (
    <>
      <section className="container mb-10">
        <div className="intro-text text-center">
          <h1>WELCOME, ADMIN</h1>
        </div>
        <div className="mt-20">
          <h2>List of political parties</h2>
        </div>
      </section>
      <section className="container">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Party Name</th>
              <th>Acronym</th>
              <th>Logo</th>
              <th>Headquarters Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {parties ? (
              parties.map((party, index) => (
                <tr data-id={party.id} key={party.id}>
                  <td data-th="S/N">{index + 1}</td>
                  <td data-th="Party Name">{party.name}</td>
                  <td data-th="Acronym">{party.acronym}</td>
                  <td data-th="Logo">
                    <img src={party.logo_url} alt="logo" className="party-logo" />
                  </td>
                  <td data-th="Headquarters">{party.hq_address}</td>
                  <td data-th="Actions">
                    <button type="button" className="edit">
                      Edit
                    </button>
                    <button type="button" className="delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <img
                alt="loader"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
          </tbody>
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

export default AdminDashboard;
