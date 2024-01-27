import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`/restaurants/${id}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) =>
        console.error('Error fetching restaurant details:', error)
      );
  }, [id]);

  if (!restaurant) {
    return <div className="mt-4">Loading...</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="mb-3">{restaurant.name}</h2>
      <p className="mb-3">Address: {restaurant.address}</p>

      <h3 className="mb-3">Pizzas</h3>
      <ul className="list-group">
        {restaurant.pizzas.map((pizza) => (
          <li key={pizza.id} className="list-group-item">
            <strong>{pizza.name}</strong> - {pizza.ingredients}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetail;
