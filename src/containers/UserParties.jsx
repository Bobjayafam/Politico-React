import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parties from '../components/Parties/Parties';
import { fetchParties } from '../actions/parties';

class UserParties extends Component {
  state = {};

  render() {
    const { fetchPartiesHandler, parties } = this.props;
    return <Parties fetchPartiesHandler={fetchPartiesHandler} parties={parties} />;
  }
}

const mapDispatchToProps = {
  fetchPartiesHandler: fetchParties
};

function mapStateToProps(state) {
  const { parties } = state.parties;
  return {
    parties
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserParties);
