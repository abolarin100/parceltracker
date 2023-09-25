import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usernameOrEmail || !password) {
      setErrorMessage('Please fill in all required fields.');
    } else {
      // You can add your login logic here
      // If login is successful, you can redirect the user to another page
      navigate('/payment');
    }
  };

  return (
    <div className='div'>
      <form className="form" id="login" onSubmit={handleSubmit}>
        <h1 className="form__title">Login</h1>
        {errorMessage && (
          <div className="form__message form__message--error">{errorMessage}</div>
        )}
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autoFocus
            placeholder="Username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required 
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type="submit">Login</button>
        <p className="form__text">
          <Link className='form__link' to="/payment">Sign in as guest</Link>
        </p>
        <p className="form__text">
          <Link className="form__link" to="/create" id="linkCreateAccount">
            Don't have an account? Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
