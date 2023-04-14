import React, { useState } from "react";
import "./App.css";

const foodTypes = [
  "Delicious Food",
  "Nutritious Food",
  "Fast Food",
  "Beverages",
  "Desserts",
];

const Form = ({ onSubmit }) => {
  const [foodName, setname] = useState("");
  const [foodType, setFoodType] = useState(foodTypes[0]);
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ foodName, foodType, maxDeliveryTime });
    setname("");
    setFoodType(foodTypes[0]);
    setMaxDeliveryTime(0);
  };

  return (
    <form onSubmit={handleSubmit} className="foodapp">
      <center>
        {" "}
        <h1>Food App</h1>
      </center>
      <div
        className="input-group mb-3"
        style={{ width: "50%", alignItems: "center" }}
      >
        {" "}
        <label htmlFor="foodName" className="input-group-text">
          Food Name
        </label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(e) => setname(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div
        className="input-group mb-3"
        style={{
          width: "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="foodType" className="input-group-text">
          Food Type
        </label>

        <select
          style={{ height: "38px", width: "180px" }}
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
      </div>
      <div
        className="input-group mb-3"
        style={{ width: "50%", alignItems: "center" }}
      >
        <label htmlFor="maxDeliveryTime" className="input-group-text">
          Max Delivery Time (in minutes)
        </label>
        <input
          type="number"
          id="maxDeliveryTime"
          value={maxDeliveryTime}
          className="form-control"
          onChange={(e) => setMaxDeliveryTime(Number(e.target.value))}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ maxWidth: "180px" }}
      >
        Add Food
      </button>
    </form>
  );
};

export default Form;
