import React from 'react';
import './desserts.css';

function Desserts() {
  return (
    <div>
    <section>
      <h3>Signature Desserts Lookout</h3>
      <div className="restaurant-card">
        <div className="restaurant-image">
          <img src="https://hips.hearstapps.com/hmg-prod/images/briochedoughnut-64244f7011bf9.jpg?crop=1.00xw:0.668xh;0,0.243xh&resize=980:*" alt="Restaurant 1" />
        </div>
        <div className="restaurant-details">
          <h4>Mah-ze-Dahr</h4>
          <p> Everything we've tried here is exceptional, but the star of the menu is the brioche doughnut filled with vanilla pastry cream and adorned with a charming doughnut hole. The delightful combination of doughnut texture and cream results in irresistible bites</p>
          <p><strong>Signature Dessert:</strong> Brioche Doughnut</p>
        </div>
      </div>
      <div className="restaurant-card">
        <div className="restaurant-image">
          <img src="https://hips.hearstapps.com/hmg-prod/images/mp-24-layer-choc-cake-644191c5634ae.jpg?crop=0.895xw:0.746xh;0.0952xw,0.254xh&resize=980:*" alt="Restaurant 2" />
        </div>
        <div className="restaurant-details">
          <h4>Maison Pickle</h4>
          <p>The star of their dessert menu, the 24-layer chocolate cake, might just be Manhattan's ultimate chocolate indulgence. After one bite, you'll agree that sharing is not advisable. </p>
          <p><strong>Signature Dessert:</strong> 24-Layer Chocolate Cake</p>
        </div>
      </div>
      <div className="restaurant-card">
        <div className="restaurant-image">
          <img src="https://hips.hearstapps.com/hmg-prod/images/ferrara-cannoli-jpg-642341bd63f93.jpg?resize=980:*" alt="Restaurant 3" />
        </div>
        <div className="restaurant-details">
          <h4>Ferrara Bakery</h4>
          <p> Treat yourself to a delightful cannoli and espresso at their cozy café – a definite must-try. </p>
          <p><strong>Signature Dessert:</strong> Cannoli</p>
        </div>
      </div>
    </section>

      <div className="video-section">
        <p className="video-description">More Desserts within this video</p>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/TmrM2Zm7c8g?si=ETFHLH-zHUD1bOnH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>


      <section className="bake-desserts-section">
      <h3 className="section-title">Bake Some Desserts</h3>
      <p className="section-description">Want to try baking delicious desserts at home? Here are some of dessert recipes you can try at home:</p>


      <div className="recipe">
        <img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-master768.jpg?w=1280&q=75" alt="Chocolate Chip Cookies" className="recipe-image" />
        <h4>Homemade Chocolate Chip Cookies</h4>
        <p>Enjoy warm and gooey chocolate chip cookies right out of your own oven. Follow our step-by-step recipe for a delightful treat.</p>
        <h5>Ingredients:</h5>
        <ul>
          <li>1 cup butter, softened</li>
          <li>1 cup granulated sugar</li>
          <li>1 cup brown sugar</li>
          <li>2 large eggs</li>
          <li>2 teaspoons vanilla extract</li>
          <li>3 cups all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>1/2 teaspoon salt</li>
          <li>2 cups semisweet chocolate chips</li>
        </ul>
        <h5>Instructions:</h5>
        <ol>
          <li>Preheat your oven to 350°F (175°C).</li>
          <li>In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until smooth.</li>
          <li>Beat in the eggs one at a time, then stir in the vanilla.</li>
          <li>In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add this dry mixture to the wet mixture and mix until just blended.</li>
          <li>Stir in the chocolate chips.</li>
          <li>Drop cookie dough by rounded tablespoons onto ungreased cookie sheets.</li>
          <li>Bake in the preheated oven for 10 to 12 minutes or until the edges are golden but the centers are still soft.</li>
          <li>Cool cookies on the baking sheet for a few minutes before transferring them to wire racks to cool completely.</li>
        </ol>
      </div>

      <div className="recipe">
        <img src="https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2019/08/apple-pie-recipe-592.jpg?resize=1024%2C1536&ssl=1" alt="Classic Apple Pie" className="recipe-image" />
        <h4>Classic Apple Pie</h4>
        <p>Bake a classic apple pie with a flaky crust and cinnamon-spiced apples. Perfect for any occasion.</p>
        <h5>Ingredients:</h5>
        <ul>
          <li>6 cups thinly sliced, peeled apples (such as Granny Smith)</li>
          <li>3/4 cup granulated sugar</li>
          <li>1 teaspoon ground cinnamon</li>
          <li>1/4 teaspoon salt</li>
          <li>1/4 teaspoon ground nutmeg</li>
          <li>1 tablespoon lemon juice</li>
          <li>2 tablespoons butter</li>
          <li>2 tablespoons all-purpose flour</li>
          <li>1 package refrigerated pie crusts (2 crusts)</li>
        </ul>
        <h5>Instructions:</h5>
        <ol>
          <li>Preheat your oven to 425°F (220°C).</li>
          <li>In a large mixing bowl, combine the sliced apples, sugar, cinnamon, salt, nutmeg, and lemon juice. Toss until well coated.</li>
          <li>Line a 9-inch pie plate with one of the pie crusts.</li>
          <li>Spoon the apple mixture into the crust and dot with butter.</li>
          <li>Top with the second pie crust, seal and flute the edges, and cut slits in the top crust to allow steam to escape.</li>
          <li>Bake for 45 to 55 minutes, or until the apples are tender and the crust is golden brown.</li>
        </ol>
      </div>

      <div className="recipe">
      <img src="https://images.squarespace-cdn.com/content/v1/54c28555e4b06765d7dcca8b/1564589152167-4GPUKZECTLQN68XQ94ZB/Screen+Shot+2019-07-31+at+9.05.24+AM.png?format=1000w" alt="Raspberry Almond Tart" className="recipe-image" />
      <h4>Raspberry Almond Tart</h4>
      <p>A beautiful and delicious raspberry almond tart with a flaky pastry crust.</p>
      <h5>Ingredients:</h5>
      <ul>
        <li>1 1/4 cups all-purpose flour</li>
        <li>1/4 cup ground almonds</li>
        <li>1/2 cup unsalted butter, cold and cubed</li>
        <li>1/4 cup granulated sugar</li>
        <li>1 large egg yolk</li>
        <li>2 tablespoons ice water</li>
        <li>2 cups fresh raspberries</li>
        <li>1/2 cup almond paste, thinly sliced</li>
        <li>2 tablespoons apricot jam, for glaze</li>
      </ul>
      <h5>Instructions:</h5>
      <ol>
        <li>In a food processor, combine the flour, ground almonds, and granulated sugar. Add the cold butter and pulse until the mixture resembles coarse crumbs.</li>
        <li>In a small bowl, whisk together the egg yolk and ice water. Drizzle this mixture into the food processor while pulsing until the dough comes together.</li>
        <li>Turn the dough out onto a floured surface and shape it into a disk. Wrap it in plastic wrap and refrigerate for at least 30 minutes.</li>
        <li>Preheat your oven to 375°F (190°C). Roll out the dough into a 12-inch circle and transfer it to a tart pan with a removable bottom.</li>
        <li>Sprinkle the sliced almond paste over the pastry crust.</li>
        <li>Arrange the fresh raspberries over the almond paste in a decorative pattern.</li>
        <li>Bake in the preheated oven for 25-30 minutes or until the crust is golden brown and the raspberries are tender.</li>
        <li>While the tart is still warm, heat the apricot jam in a small saucepan until it becomes liquid. Brush the warm jam over the raspberries to glaze the tart.</li>
        <li>Allow the tart to cool completely before serving. Enjoy!</li>
      </ol>
    </div>
    </section>

    </div>
  );
}

export default Desserts;
