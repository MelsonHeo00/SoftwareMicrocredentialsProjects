// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import cardData from './CardData'; 

function App() {
    // State for sign-in form
    const [signInData, setSignInData] = useState({ username: '', password: '' });

    // State for sign-up form
    const [signUpData, setSignUpData] = useState({ newUsername: '', newPassword: '' });
  
    // Handle sign-in form submission
    const handleSignInSubmit = (e) => {
      e.preventDefault();
      // Handle sign-in logic here (e.g., validation and authentication)
      console.log('Sign In Data:', signInData);
    };
  
    // Handle sign-up form submission
    const handleSignUpSubmit = (e) => {
      e.preventDefault();
      // Handle sign-up logic here (e.g., validation and user registration)
      console.log('Sign Up Data:', signUpData);
    };
  

  return (
    <div>
      <div id="home">
        {<Header />}
      </div>

      <Navbar />
      
      <main className="app">
        <div id="about">
          <div className="card-container">
            {cardData}
          </div>
        </div>

        <div id="login">
        <div className="centered-text">
        <p>Want to keep an account??</p>
        <p>Find your login form down below</p>
        </div>

        <div id="login-signup">
  <div className="login-form">
    <h2>Sign In</h2>
    <form onSubmit={handleSignInSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={signInData.username}
          onChange={(e) => setSignInData({ ...signInData, username: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signInData.password}
          onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>

  <div className="signup-form">
    <h2>Sign Up</h2>
    <form onSubmit={handleSignUpSubmit}>
      <div className="form-group">
        <label htmlFor="newUsername">Username:</label>
        <input
          type="text"
          id="newUsername"
          name="newUsername"
          value={signUpData.newUsername}
          onChange={(e) => setSignUpData({ ...signUpData, newUsername: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={signUpData.newPassword}
          onChange={(e) => setSignUpData({ ...signUpData, newPassword: e.target.value })}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>



        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;

