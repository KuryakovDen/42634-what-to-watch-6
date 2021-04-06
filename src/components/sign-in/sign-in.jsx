import React, {useRef} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {signInType} from "../../validation";
import {login} from "../../store/api-actions";
import {browserHistory} from "../../utils";
import {checkUserAuth, getErrorMessage} from "../../store/user/selectors";

const SignIn = ({onSubmit, authStatus, errorMessage}) => {
  if (authStatus) {
    return <Redirect to={`/`}/>;
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const authData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    onSubmit(authData);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={`/`} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              {
                errorMessage ?
                  <div className="sign-in__message">{errorMessage} <br/>
                    We can’t recognize this email
                    and password combination. Please try again.
                  </div>
                  : ``
              }
              <input
                className="sign-in__input"
                ref={emailRef}
                type="email"
                placeholder="user@mail.ru"
                name="user-email"
                required
                id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="user-password"
                required
                id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={`/`} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  ...signInType
};

const mapStateToProps = (state) => ({
  authStatus: checkUserAuth(state),
  errorMessage: getErrorMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
    browserHistory.push(`/`);
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
