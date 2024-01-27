import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import PizzaList from '../components/PizzaList';
import RestaurantList from '../components/RestaurantList';
import pizzaImage from '../images/image1.webp';

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log('Fetching restaurants...');
    fetch('/restaurants')
      .then((r) => r.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setRestaurants(data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  function handleDelete(id) {
    fetch(`/restaurants/${id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        setRestaurants((restaurants) =>
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      }
    });
  }

  return (
    <div>
      <LandingPage />

      <div className="container-fluid mt-5">
        <div className="row">
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ height: '50vh' }}
          >
            <img
              src={pizzaImage}
              alt="Pizza"
              className="img-fluid rounded"
              style={{ width: '80%', height: '80%' }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="fw-bold">Welcome to PIZZA WORLD! 😊</h1>
                  <p className="lead text-center">
                    Explore the best pizza flavors from around the world.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <h2>Explore Our Pizzas</h2>
                  <PizzaList pizzas={[]} />
                </div>
                <div className="col-md-6">
                  <h2>Featured Restaurants</h2>
                  <RestaurantList restaurants={restaurants} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="container">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">
                  <Link to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                  </Link>
                </h2>
                <p className="card-text">Address: {restaurant.address}</p>
                <button
                  onClick={() => handleDelete(restaurant.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
