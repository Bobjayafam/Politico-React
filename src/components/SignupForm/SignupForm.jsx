/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { signup } from '../../actions/authentication';
import Footer from '../Footer/Footer';

class Signup extends Component {
  state = {
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  validator = new SimpleReactValidator({ className: 'text-danger' });

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dpuyyqxnl/image/upload';
      const CLOUDINARY_UPLOAD_PRESET = 'zk8ssipf';
      const fileUpload = document.getElementById('passportUrl').files[0];
      const image = new FormData();
      image.append('file', fileUpload);
      image.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const result = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: image
      })
        .then(response => response.json())
        .then(data => data.secure_url)
        .catch(err => err);

      const user = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        othername: this.state.othername,
        phoneNumber: this.state.phoneNumber,
        passportUrl: result
      };
      this.props.signup(user, this.props.history);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    const { registering } = this.props;

    const { fisrtname, lastname, email, password, phoneNumnber } = this.state;
    return (
      <>
        <div className="signup-container container">
          <form action="" className="signup-form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="firstname">
                First Name
                <span>*</span>
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={fisrtname}
                onChange={this.handleChange}
              />
              {this.validator.message('firstname', this.state.firstname, 'required|alpha|min:2')}
            </div>
            <div className="input-group">
              <label htmlFor="lastname">
                Last Name
                <span>*</span>
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={this.handleChange}
              />
              {this.validator.message('lastname', this.state.lastname, 'required|alpha|min:2')}
            </div>
            <div className="input-group">
              <label htmlFor="email">
                Email address
                <span>*</span>
              </label>
              <input name="email" id="email" value={email} onChange={this.handleChange} />
              {this.validator.message('email', this.state.email, 'required|email')}
            </div>
            <div className="input-group">
              <label htmlFor="password">
                Password
                <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={this.handleChange}
              />
              {this.validator.message('password', this.state.password, 'required|min:6')}
            </div>
            <div className="input-group">
              <label htmlFor="passportUrl">
                Profile Picture
                <span>*</span>
              </label>
              <input type="file" name="passportUrl" id="passportUrl" required />
            </div>
            <div className="input-group">
              <button type="submit">
                {registering ? (
                  <img
                    alt="loader"
                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  />
                ) : (
                  'Signup'
                )}
              </button>
            </div>
          </form>
          <div className="have-account text-center">
            <p>
              {'Already have an account?'}
              <Link to="/login" href="login.html" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.signup;
  return {
    registering
  };
}

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
