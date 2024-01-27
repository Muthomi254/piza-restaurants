import React from 'react';
import pizzaImage from '../images/image1.webp';

const About = () => (
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2>Welcome to Pizza World!</h2>
          <p>
            Explore a delightful array of pizzas and discover top-notch pizza
            restaurants. Whether you crave classic flavors or adventurous
            combinations, we've got your pizza cravings covered.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-end">
        <img
          src={pizzaImage}
          alt="Pizza"
          className="img-fluid"
          style={{ width: '100%', height: '100vh' }}
        />
      </div>
    </div>
  </div>
);

export default About;
