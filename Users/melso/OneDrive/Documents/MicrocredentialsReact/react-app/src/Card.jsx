import React from 'react';
import './Card.css';

const Card = ({ title, content, imageUrl, button }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
      <button className="button">{button}</button>
    </div>
  );
};

export default Card;