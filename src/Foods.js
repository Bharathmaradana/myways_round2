import React, { useState } from "react";

const Foods = ({ foods }) => {
  const [foodTypeFilter, setFoodTypeFilter] = useState("all");
  const [maxDeliveryTimeFilter, setMaxDeliveryTimeFilter] = useState("");

  const handleFoodTypeFilterChange = (event) => {
    setFoodTypeFilter(event.target.value);
  };

  const handleMaxDeliveryTimeFilterChange = (event) => {
    setMaxDeliveryTimeFilter(event.target.value);
  };

  const filteredFoods = foods.filter((food) => {
    if (foodTypeFilter === "all" || foodTypeFilter === food.foodType) {
      return food.maxDeliveryTime <= maxDeliveryTimeFilter;
    }
    return false;
  });

  return (
    <div className="foodapp">
      <h2>All Foods</h2>
      <div
        className="input-group mb-3"
        style={{ width: "50%", alignItems: "center" }}
      >
        <label htmlFor="foodTypeFilter" className="input-group-text">
          Filter by Food Type
        </label>
        <select
          style={{ height: "38px", width: "120px" }}
          id="foodTypeFilter"
          value={foodTypeFilter}
          onChange={handleFoodTypeFilterChange}
        >
          <option value="all">All</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>
      <div
        className="input-group mb-3"
        style={{ width: "50%", alignItems: "center" }}
      >
        <label htmlFor="maxDeliveryTimeFilter" className="input-group-text">
          Filter by Max Delivery Time
        </label>
        <input
          className="form-control"
          type="number"
          id="maxDeliveryTimeFilter"
          value={maxDeliveryTimeFilter}
          onChange={handleMaxDeliveryTimeFilterChange}
        />
      </div>
      <ul className="items">
        {filteredFoods.map((food, index) => (
          <li key={index}>
            <p>Food Name: {food.foodName}</p>
            <p>Food Type: {food.foodType}</p>
            <p>Max Delivery Time: {food.maxDeliveryTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foods;
