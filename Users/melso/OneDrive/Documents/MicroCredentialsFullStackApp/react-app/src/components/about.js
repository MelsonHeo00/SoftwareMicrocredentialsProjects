import React, { useState } from 'react';
import './about.css';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    if (formData.name && formData.feedback) {
      fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          closeModal();
        })
        .catch((error) => {
          console.error(error);
          alert('An error occurred while submitting feedback.');
        });
    } else {
      alert('Name and Feedback are required fields.');
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">Welcome to NYC Best Food!</p>
      <p className="about-paragraph">
        NYC Best Food is your go-to source for discovering delicious dishes and exploring the culinary world of New York City. Our mission is to connect food lovers with the best dining experiences in the Big Apple, whether you're a passionate foodie or simply looking for a great place to eat.
      </p>
      <p className="about-paragraph">
        Founded in 2023 by Melson Heo, NYC Best Food has been dedicated to bringing you the most mouthwatering experiences in the city.
      </p>
      <p className="about-paragraph">
        Thank you for joining us on this gastronomic journey through NYC. Feel free to explore our website, discover new flavors, and share your culinary experiences with the NYC Cuisine community.
      </p>
      <p className="about-paragraph">
        If you have any questions, feedback, or suggestions, please don't hesitate to contact us. We value your input and are always eager to improve our platform to better serve your food cravings.
      </p>

      <section id="contact" className="contact">
        <h2 style={{ color: 'white' }}>Contact Us</h2>
        <p>If you have any questions, suggestions, or partnership inquiries, please feel free to contact us:</p>
        <p>Email: info@nycbestfood.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </section>

      <section id="feedback" className="feedback">
        <h2>Submit Feedback</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: '300px' }} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email (optional):</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: '300px' }} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              style={{ width: '350px', height: '250px' }} 
              maxLength={500}
              required
            ></textarea>
          </div>
          <button type="button" onClick={openModal} className="modalButton">
            Submit
          </button>
        </form>
      </section>

      <div className="modal-overlay" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal">
          <h3>Confirm Submission</h3>
          <p>Are you sure you want to submit your feedback?</p>
          <button onClick={handleConfirm} className="modalButton">Yes</button>
          <button onClick={closeModal} className="modalButton">No</button>
        </div>
      </div>
    </div>
  );
}

export default About;
