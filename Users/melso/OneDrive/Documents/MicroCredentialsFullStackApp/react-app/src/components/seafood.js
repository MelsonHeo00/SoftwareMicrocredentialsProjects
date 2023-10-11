import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './seafood.css';

function Seafood() {
  const seafoodData = [
    {
      image: 'https://media.timeout.com/images/105912306/750/562/image.jpg',
      description: 'The Fulton',
      restaurant: 'Seafood Restaurant',
      reservationLink: 'https://www.thefulton.nyc/',
    },
    {
      image: 'https://media.timeout.com/images/105899361/750/562/image.jpg',
      description: 'Littleneck',
      restaurant: 'Nautical Seafood Spot',
      reservationLink: 'https://www.littleneckbk.com/',
    },
    {
      image: 'https://media.timeout.com/images/105782038/750/562/image.jpg',
      description: 'Leland Eating and Drinking House',
      restaurant: 'Home to Delicous Seafood Lunch and Dinner',
      reservationLink: 'https://www.lelandbrooklyn.com/',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const specialsData = [
    {
      title: 'Ocean Prime',
      description: 'Special Menu features Seasonal Lunch Features from Monday to Friday from 11:30am to 4pm',
      image: 'https://www.ocean-prime.com/wp-content/uploads/2022/08/OceanPrime-NYC-1jpg-1-1024x678.jpg', 
      reservationLink: 'https://www.opentable.com/restref/client/?rid=173662&corrid=cf3ec28c-ba7b-4a5c-b485-f7de6a827c87', 
    },
    {
      title: 'Docks',
      description: 'Join the Happy Hour to gain new experience food every day between 3pm to 7pm and more special foods',
      image: 'https://lh3.googleusercontent.com/p/AF1QipOxOa1bz0fPr129S1Msj9zjh1x2llcbTZLQunF2=s1360-w1360-h1020', 
      reservationLink: 'https://www.docksoysterbar.com/menus/', 
    },
  ];

  return (
    <div className="seafood-container">
    <div className="seafood-introduction" style={{ textAlign: 'center', padding: '20px', background: '#f5f5f5' }}>
      <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>Explore the World of Seafood</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#666' }}>
        Discover the finest seafood dishes from around NYC. From succulent grilled shrimp to delicate sushi rolls, seafood offers a diverse and flavorful culinary experience.
      </p>
    </div>


      <div className="seafood-slider-container">
        <Slider {...sliderSettings}>
          {seafoodData.map((item, index) => (
            <div key={index} className="slider-image-container">
              <img src={item.image} alt={`Seafood ${index}`} className="slider-image" />
              <div className="image-description">
                <div className="description-text">
                  <h3>{item.description}</h3>
                  <p>Restaurant: {item.restaurant}</p>
                  <p>Make a Reservation: <a href={item.reservationLink} target="_blank" rel="noopener noreferrer">Reserve Table</a></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="specials-section">
        <h2>Specials and Promotions</h2>
        <div className="specials-container">
          {specialsData.map((special, index) => (
            <div key={index} className="special">
              <h3>{special.title}</h3>
              <p>{special.description}</p>
              <img src={special.image} alt={`Special ${index}`} className="special-image" />
              <p>Make a Reservation: <a href={special.reservationLink} target="_blank" rel="noopener noreferrer">Reserve Table</a></p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Seafood;
