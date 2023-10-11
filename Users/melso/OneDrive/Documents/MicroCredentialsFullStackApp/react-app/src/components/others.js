import React from 'react';
import './others.css'; // Import your CSS file

function Others() {
  return (
    <div className="others-container">
      <div className="cuisine-section">
        <h2 className="section-title">Vegetarian Options in NYC</h2>
        <p>
          Explore some of the best vegetarian restaurants and dishes in New York City:
        </p>
        <ul>
          <li>Vegetarian Restaurant 1 - Try their famous veggie burger.</li>
          <li>Vegetarian Restaurant 2 - Don't miss the delicious tofu stir-fry.</li>
          {/* Add more recommendations for vegetarian options */}
        </ul>
      </div>

      <div className="cuisine-section">
        <h2 className="section-title">Meat Options in NYC</h2>
        <p>
          Discover mouthwatering meat options and BBQ joints in New York City:
        </p>
        <ul>
          <li>BBQ Joint 1 - Order their signature ribs and pulled pork.</li>
          <li>Steakhouse 1 - Savor the perfectly grilled steaks.</li>
          {/* Add more recommendations for meat options */}
        </ul>
      </div>
    </div>
  );
}

export default Others;
