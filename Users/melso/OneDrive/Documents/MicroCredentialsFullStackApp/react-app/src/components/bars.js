import React from 'react';
import './bars.css';

function Bars() {
  return (
    <div>
      <section className="bars-section">
        <h2>Bars in NYC</h2>
        <p>Explore the best bars in New York City.</p>
        <ul className="bar-list">
          <li>
            <h3>The Long Island Bar</h3>
            <p>Located on a corner and carrying the same name for over five decades, Long Island Bar has seamlessly embraced its nostalgic ambiance, now in its second decade of operation.</p>
            <p><strong>Known For:</strong> Welcoming Environs and Best-in-class Gimlets and Martinis</p>
            <img src="https://media.timeout.com/images/101304183/750/562/image.jpg" alt="Bar 1" />
          </li>
          <li>
            <h3>Clover Club</h3>
            <p>Clover Club, a fixture on Smith Street since 2008, has stood the test of time while other cherished dining establishments and bars have experienced openings and closures. It not only excels in both categories but also boasts an appealing ambiance that remains inviting and distinctive, whether you're a loyal patron or a first-time visitor.</p>
            <p><strong>Known For:</strong>  Best Seat on the Block and Best of the Best Cocktail Menu.</p>
            <img src="https://media.timeout.com/images/103172475/750/562/image.jpg" alt="Bar 2" />
          </li>
          <li>
            <h3>Sunken Harbor Club</h3>
            <p> In 2021, Sohui Kim, Ben Schneider, and St. John Frizell's remarkable revival of Gage & Tollner earned them a spot among the best new restaurants in NYC. Building on that triumphant achievement, the team introduced Sunken Harbor Club on the upper floor.</p>
            <p><strong>Known For:</strong> Weekly Parties and Drink Menus as Deep as the Sea</p>
            <img src="https://media.timeout.com/images/105917893/750/562/image.jpg" alt="Bar 3" />
          </li>
        </ul>
      </section>

      <section className="happy-hour-section">
        <h2>Happy Hours</h2>
        <p>Discover happy hours in NYC for great deals and specials.</p>
        <ul className="happy-hour-list">
          <li>
            <h3>Las' Lap</h3>
            <p>Las’ Lap is a cool Caribbean bar on Orchard Street with potted plants, floral bar stools, and a cocktail list that emphasizes ingredients like coconut, passionfruit, and rum.</p>
            <p>Time: Mon-Thurs, 5pm-8pm</p>
            <p><strong>Specials:</strong> $6 Beer; $8 Wine; $13 Cocktails</p>
            <img src="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_750,ar_4:3,g_center,f_auto/cms/reviews/las-lap/banners/1571842029.29" alt="Happy Hour 1" />
          </li>
          <li>
            <h3>Sweet and Vicious</h3>
            <p>You come to Sweet & Vicious for two things: frozen margaritas (they’re especially potent here) and an outdoor patio. If you’re here in the warmer months, it’s great for big groups—but it does get crowded.</p>
            <p>Time: Sun, 2pm-7pm; Mon 5pm-7pm; Tues-Thurs, 2pm-7pm; Friday, 2pm-6pm</p>
            <p><strong>Specials:</strong> $1-$2 Off Most Drinks </p>
            <img src="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_750,ar_4:3,g_center,f_auto/cms/reviews/sweet-and-vicious/banners/1495825783.99" alt="Happy Hour 2" />
          </li>
          <li>
            <h3>The Wayland</h3>
            <p>The Wayland, located on Avenue C in Alphabet City, is your ideal neighborhood bar. It's good for dates, good for casual drinks with a small group, and good for Happy Hour. </p>
            <p>Time: Weekdays, 4pm-7pm</p>
            <p><strong>Specials:</strong> $10 Cocktails; $10 Half Dozen Oysters; $18 Dozen Oysters; $7 Oyster Shooters; $9 Glasses Of Wine; $4-$5 Beer</p>
            <img src="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_750,ar_4:3,g_center,f_auto/NYC_The_Wayland_0123_horizontal_obbi4j" alt="Happy Hour 3" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Bars;

