import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import Modal from 'react-modal';
import './navigation.css';

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowLogin(false); 
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <Link to="/seafood" className="navbar-link">Seafood</Link>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <Link to="/desserts" className="navbar-link">Desserts</Link>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <Link to="/bars" className="navbar-link">Bars</Link>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <Link to="/others" className="navbar-link">Others</Link>
        </li>
      </ul>
    

      <div className="navbar-center">
      <button className="open-modal-button" onClick={toggleModal}>
        Registration/Login
      </button>
    </div>
    <Modal
      isOpen={showModal}
      onRequestClose={toggleModal}
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <div>
        <button className="close-modal-button" onClick={toggleModal}>
          Close
        </button>
        <div className="modal-content">
          <div className="modal-forms">
            <div className="form-toggle">
              <button
                className={`toggle-button ${!showLogin ? 'active' : ''}`}
                onClick={toggleForm}
              >
                Registration
              </button>
              <button
                className={`toggle-button ${showLogin ? 'active' : ''}`}
                onClick={toggleForm}
              >
                Login
              </button>
            </div>
            <div className="small-white-modal">
              <div className="centered-content">
                {!showLogin ? <Registration /> : <Login />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>

      
    </nav>
  );
}

export default Navigation;
