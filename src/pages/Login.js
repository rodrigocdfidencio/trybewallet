import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmailAction } from '../actions';

const VALID_CARACTERS = 6;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { state: { email }, props: { emailDispatch } } = this;
    emailDispatch(email);
    this.setState((state) => ({ ...state, shouldRedirect: true }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleClick, handleChange } = this;
    const { email, password, shouldRedirect } = this.state;

    const emailValidation = email.includes('@' && '.com');
    const passwordValidation = password.length >= VALID_CARACTERS;
    return (
      <section>
        { shouldRedirect && <Redirect to="/carteira" /> }
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ handleChange }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              value={ password }
              onChange={ handleChange }
              placeholder="Password"
            />
          </label>
          <button
            type="button"
            disabled={ !(passwordValidation && emailValidation) }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(addEmailAction(email)),
});

const { func } = PropTypes;
Login.propTypes = {
  emailDispatch: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
