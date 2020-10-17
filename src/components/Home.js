import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { auth } from '../firebase/firebase';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="home">
      <h1>Home Page</h1>
      <h3>Welcome {user.email}</h3>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
