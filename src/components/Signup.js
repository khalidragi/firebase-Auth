import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const initialState = { email: '', password: '', confirmPassword: '' };

const Signup = () => {
  const history = useHistory();
  const [input, setInput] = useState('');
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
    if (input.password !== input.confirmPassword)
      return setError("Password don't match");

    try {
      await auth.createUserWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up Page</h1>
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          value={input.confirmPassword}
          autoComplete="off"
          onChange={handleChange}
          name="confirmPassword"
        />
        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
      </form>
      <p>
        Already a user? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
