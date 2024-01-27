import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get('/pizzas')
      .then((response) => setPizzas(response.data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-3">Pizzas</h2>
      <ul className="list-group">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="list-group-item">
            <strong>{pizza.name}</strong> - {pizza.ingredients}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
