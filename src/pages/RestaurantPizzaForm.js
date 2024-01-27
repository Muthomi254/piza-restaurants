import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantPizzaForm = () => {
  const [formData, setFormData] = useState({
    price: '',
    pizza_id: '',
    restaurant_id: '',
  });
  const [errors, setErrors] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    console.log('Fetching pizzas...');
    axios
      .get('/api/pizzas')
      .then((response) => {
        console.log('Pizzas response:', response.data);
        const responseData = response.data ? response.data : [];
        setPizzas(responseData);
      })
      .catch((error) => {
        console.error(
          'Error fetching pizzas:',
          error.response || error.message || error
        );
        setPizzas([]);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'pizza_id' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/restaurant_pizzas', formData)
      .then((response) =>
        console.log('RestaurantPizza created:', response.data)
      )
      .catch((error) => {
        console.error(
          'Error creating RestaurantPizza:',
          error.response || error.message || error
        );
        setErrors(error.response.data.errors || []);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Create RestaurantPizza</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pizza_id" className="form-label">
                Select Pizza:
              </label>
              <select
                id="pizza_id"
                name="pizza_id"
                value={formData.pizza_id}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled>
                  Select Pizza
                </option>
                {pizzas &&
                  pizzas.length > 0 &&
                  pizzas.map((pizza) => (
                    <option key={pizza.id} value={pizza.id}>
                      {pizza.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="restaurant_id" className="form-label">
                Restaurant ID:
              </label>
              <input
                type="number"
                id="restaurant_id"
                name="restaurant_id"
                value={formData.restaurant_id}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create RestaurantPizza
            </button>
          </form>

          {errors.length > 0 && (
            <div className="mt-4">
              <h3>Errors:</h3>
              <ul className="list-unstyled">
                {errors.map((error, index) => (
                  <li key={index} className="text-danger">
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPizzaForm;
