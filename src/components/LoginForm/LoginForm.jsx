/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Footer from '../Footer/Footer';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters!')
    .required('Password is required')
});

const LoginForm = ({ loginHandler, loggingIn }) => {
  return (
    <>
      <section className="container text-center mb-10">
        <div className="intro-text">
          <h1>LOGIN INTO YOUR ACCOUNT</h1>
        </div>
      </section>
      <div className="signup-container container">
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={values => {
            loginHandler(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <Field name="email" id="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" id="password" />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
              </div>
              <div className="input-group">
                <button type="submit">
                  {loggingIn ? (
                    <img
                      alt="loader"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="have-account mt-10 text-center">
          <p className="mb-10">
            forgot your password?
            <Link to="/resetpassword" href="password-reset">
              click here
            </Link>
          </p>
          <p>
            {"Don't have an account?"}
            <Link to="/signup" href="signup" className="text-primary">
              Register
            </Link>
            here
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
