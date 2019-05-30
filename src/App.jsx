import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './pages/LandingPage/LandingPage';
import history from './helpers/history';
import SignupForm from './components/SignupForm/SignupForm';
import Navbar from './components/Navbar/Navbar';
import { clearAlert } from './actions/alert';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(clearAlert());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="col-sm-8 col-sm-offset-2">
        <Router history={history}>
          <Navbar />
          {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/signup" exact component={SignupForm} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);
