import React from 'react';
import './mainpage.css';

function MainPage() {
  return (
    <div className="main-container">
      <header className="header">
        <h1 className="title" style={{color: 'white'}}>NYC Best Food</h1>
        <h2 className="subtitle">Discover the NYC of Delicious Food</h2>
      </header>

      <section className="featured-food">
  <h2>Featured Dishes</h2>
  <div className="featured-dishes">
    <div className="dish">
      <img
        src="https://sharedappetite.com/wp-content/uploads/2013/12/IMG_8584-57.jpg"
        alt="Featured Dish 1"
        style={{ height: '400px', width: '500px' }}
      />
      <h3>Dish 1: Soppressata Piccante Pizza</h3>
      <p>Soppressata Piccante ($16) - Tomato Sauce, Fior di Latte, Spicy Soppressata, Chili Flakes, Garlic, Oregano, Pecorino, E.V. Olive Oil</p>
      <p>Location: <a href="https://www.motorinopizza.com/">Motorino Pizza</a></p>
    </div>
    <div className="dish">
      <img
        src="https://sharedappetite.com/wp-content/uploads/2013/12/IMG_8469-16.jpg"
        alt="Featured Dish 2"
        style={{ height: '400px', width: '500px' }} 
      />
      <h3>Dish 2: Terimayo</h3>
      <p>Japadog's signature hot dog, the Terimayo ($4.14), is an all-beef dog with teriyaki sauce, Japanese mayo, dried seaweed (nori) strips, and fried onions.</p>
      <p>Location: <a href="https://japadog.com/">Japadog</a></p>
    </div>
    <div className="dish">
      <img
        src="https://media.timeout.com/images/105775049/image.jpg"
        alt="Featured Dish 3"
        style={{ height: '400px', width: '500px' }}
      />
      <h3>Dish 3: NYC Steak</h3>
      <p>The dry-aged NY strip ($57) was a suitable compromise instead; richly butter-basted, kissed with char outside, the desired shade of mauve inside and served with a hearty half-head of roasted garlic</p>
      <p>Location: <a href="https://www.gageandtollner.com/">Gage & Tollner</a></p>
    </div>
  </div>
</section>


    <section className="popular-restaurants">
  <h2>Popular Restaurants</h2>
  <div className="restaurant-list">
    <div className="restaurant" style={{ marginBottom: '40px', textAlign: 'center' }}>
      <img
        src="https://media.timeout.com/images/105853313/750/562/image.jpg"
        alt="Gramercy Tavern"
        style={{ height: '400px', width: '500px', display: 'block', margin: '0 auto' }}
      />
      <h3>Gramercy Tavern</h3>
      <p>Location: 42 E 20th St New York, NY 10003 Broadway & S Park Ave Flatiron</p>
      <p>Rating: 4.5/5</p>
      <p>Get Directions: <a href="https://www.yelp.com/map/gramercy-tavern-new-york">Directions</a></p>
      <p></p>
    </div>
    <div className="restaurant" style={{ marginBottom: '40px', textAlign: 'center' }}>
      <img
        src="https://media.timeout.com/images/101435865/750/562/image.jpg"
        alt="Restaurant 2"
        style={{ height: '400px', width: '500px', display: 'block', margin: '0 auto' }}
      />
      <h3>Sushi Nakazawa</h3>
      <p>Location: 23 Commerce St New York, NY 10014 S 7th Ave & Bedford St West Village</p>
      <p>Rating: 4.3/5</p>
      <p>Get Directions: <a href="https://www.yelp.com/map/sushi-nakazawa-new-york">Directions</a></p>
    </div>
    <div className="restaurant" style={{ marginBottom: '20px', textAlign: 'center' }}>
      <img
        src="https://media.cntraveler.com/photos/62c59a2e3a2694c3303f1409/master/w_1920%2Cc_limit/ATOBOY_2019_PC_%2520Diane%2520Kang.jpg"
        alt="Restaurant 3"
        style={{ height: '400px', width: '500px', display: 'block', margin: '0 auto' }}
      />
      <h3>Atoboy</h3>
      <p>43 E 28th St New York, NY 10016 Madison Ave & S Park Ave Flatiron</p>
      <p>Rating: 4.5/5</p>
      <p>Get Directions: <a href="https://www.yelp.com/map/atoboy-new-york">Directions</a></p>
    </div>
  </div>
</section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} NYC Best Food</p>
      </footer>
    </div>
  );
}

export default MainPage;


