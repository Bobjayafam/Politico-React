/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import loader from '../../assets/loader.svg';
import Modal from '../Modal';
// import CreatePartyModal from '../CreateParty';

const AdminDashboard = ({ fetchPartiesHandler, parties, addPartyHandler }) => {
  const [values, setValues] = useState({ name: '', hqAddress: '', acronym: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const [openModal, setopenModal] = useState(false);
  const triggerOpenModal = () => {
    setopenModal(true);
  };

  const closeOpenModal = () => {
    setopenModal(false);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    const file = document.querySelector('.logo').files[0];
    formData.set('name', values.name);
    formData.set('acronym', values.acronym);
    formData.set('hqAddress', values.hqAddress);
    formData.append('logoUrl', file);
    addPartyHandler(formData);
    closeOpenModal();
  };
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
          <button type="button" className="new-party" onClick={triggerOpenModal}>
            Add New Party
          </button>
          <Modal show={openModal} closeCallback={closeOpenModal} customClass="custom_modal_class">
            <div>
              <section className="container mb-10">
                <div className="intro-text text-center">
                  <h1>CREATE NEW PARTY</h1>
                </div>
              </section>

              <div className="signup-container container">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="party-name">
                      Party Name
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      id="party-name"
                      name="name"
                      onChange={handleInputChange}
                      value={values.name}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="acronym">
                      Acronym
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      id="acronym"
                      name="acronym"
                      onChange={handleInputChange}
                      value={values.acronym}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="address">
                      Headquarters Address
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      id="address"
                      name="hqAddress"
                      onChange={handleInputChange}
                      value={values.hqAddress}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="logo">
                      Logo
                      <span>*</span>
                    </label>
                    <input
                      type="file"
                      required
                      id="logo"
                      name="logoUrl"
                      className="logo"
                      // onChange={handleFileChange}
                    />
                  </div>
                  <div className="input-group">
                    <button type="submit">Create Party</button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
          <h2>List of political parties</h2>
        </div>
      </section>
      <section className="container">
        {parties.gettingParties ? (
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <img alt="loader" src={loader} />
          </div>
        ) : null}
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
            {parties &&
              parties.parties.map((party, index) => (
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
              ))}
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
