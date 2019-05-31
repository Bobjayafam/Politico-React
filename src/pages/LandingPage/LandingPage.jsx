import React from 'react';
import Footer from '../../components/Footer/Footer';
import './LandingPage.css';

const LandingPage = () => (
  <>
    <section className="hero mb-50">
      <div className="hero-text">
        <h1 className="mb-20">Welcome to politico</h1>
        <p className="mb-50">Your Secure online voting platform</p>
        <button type="button">Get started</button>
      </div>
    </section>
    <section className="container">
      <div className="features text-center text-bold mb-20">
        <p className="features-heading">Only three steps needed</p>
      </div>
      <div className="cards text-center">
        <div className="card2">
          <div className="card-label">
            <h1>REGISTER</h1>
            <i className="far fa-registered fa-4x" />
            <p>
              If you are up to the voting age of 18, Register via a simple process. You can register
              on all device type
            </p>
          </div>
        </div>
        <div className="card2">
          <div className="card-label">
            <h1>VOTE</h1>
            <i className="fas fa-person-booth fa-4x" />
            <p>
              Search for the political office and your preferred candidate. Cast your Vote from the
              comfort of your home. No more long queues at polling stations
            </p>
          </div>
        </div>
        <div className="card2">
          <div className="card-label">
            <h1>RESULT</h1>
            <i className="fas fa-poll fa-4x" />
            <p>View Results of a secure and accountable process</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default LandingPage;
