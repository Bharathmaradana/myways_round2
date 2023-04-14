import React, { useState } from "react";

const foodTypes = [
  "Delicious Food",
  "Nutritious Food",
  "Fast Food",
  "Beverages",
  "Desserts",
];

const Form = ({ onSubmit }) => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState(foodTypes[0]);
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ foodName, foodType, maxDeliveryTime });
    setFoodName("");
    setFoodType(foodTypes[0]);
    setMaxDeliveryTime(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="foodName">Food Name</label>
      <input
        type="text"
        id="foodName"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        required
      />
      <label htmlFor="foodType">Food Type</label>
      <select
        id="foodType"
        value={foodType}
        onChange={(e) => setFoodType(e.target.value)}
        required
      >
        {foodTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <label htmlFor="maxDeliveryTime">Max Delivery Time (in minutes)</label>
      <input
        type="number"
        id="maxDeliveryTime"
        value={maxDeliveryTime}
        onChange={(e) => setMaxDeliveryTime(Number(e.target.value))}
        required
      />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default Form;
