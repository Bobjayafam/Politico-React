import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import { fetchParties, addParty } from '../actions/parties';

class Admin extends Component {
  state = {};

  render() {
    const { fetchPartiesHandler, parties, addPartyHandler } = this.props;
    return (
      <>
        <AdminDashboard
          fetchPartiesHandler={fetchPartiesHandler}
          parties={parties}
          addPartyHandler={addPartyHandler}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { parties } = state;
  return {
    parties
  };
}

const mapDispatchToProps = {
  fetchPartiesHandler: fetchParties,
  addPartyHandler: addParty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
