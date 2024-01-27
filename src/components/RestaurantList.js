import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get('/restaurants')
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-3">Restaurants</h2>
      <ul className="list-group">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="list-group-item">
            <strong>{restaurant.name}</strong> - {restaurant.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
