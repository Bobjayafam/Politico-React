import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDashboard from '../components/UserDashboard/UserDashboard';

class User extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return <UserDashboard user={user} />;
  }
}

function mapStateToProps(state) {
  const { user } = state.login.user;
  console.log('user in state', user);
  return {
    user
  };
}

export default connect(mapStateToProps)(User);
