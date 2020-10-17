import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const initialState = { email: '', password: '' };

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={input.email}
          autoComplete="off"
          onChange={handleChange}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
      </form>
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
