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
    <div>
      <h2>All Foods</h2>
      <label htmlFor="foodTypeFilter">Filter by Food Type</label>
      <select
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
      <label htmlFor="maxDeliveryTimeFilter">Filter by Max Delivery Time</label>
      <input
        type="number"
        id="maxDeliveryTimeFilter"
        value={maxDeliveryTimeFilter}
        onChange={handleMaxDeliveryTimeFilterChange}
      />
      <ul>
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
