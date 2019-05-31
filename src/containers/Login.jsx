import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import { login as loginAction } from '../actions/authentication';

class Login extends Component {
  state = {};

  render() {
    const { loginHandler, loggingIn } = this.props;
    return (
      <>
        <LoginForm loginHandler={loginHandler} loggingIn={loggingIn} />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.login;
  return {
    loggingIn
  };
}

const mapDispatchToProps = {
  loginHandler: loginAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
