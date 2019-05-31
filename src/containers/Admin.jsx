import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import { fetchParties } from '../actions/parties';

class Admin extends Component {
  state = {};

  render() {
    const { fetchPartiesHandler, parties } = this.props;
    return <AdminDashboard fetchPartiesHandler={fetchPartiesHandler} parties={parties} />;
  }
}

function mapStateToProps(state) {
  const { parties } = state.parties;
  return {
    parties
  };
}

const mapDispatchToProps = {
  fetchPartiesHandler: fetchParties
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
