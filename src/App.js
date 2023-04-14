import React, { useState, useEffect } from "react";
import Form from "./Form";
import Foods from "./Foods";

const App = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(storedFoods);
  }, []);

  const handleSubmit = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
    localStorage.setItem("foods", JSON.stringify(updatedFoods));
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Add Food</a>
          </li>
          <li>
            <a href="/foods">All Foods</a>
          </li>
        </ul>
      </nav>
      {window.location.pathname === "/" ? (
        <Form onSubmit={handleSubmit} />
      ) : (
        <Foods foods={foods} />
      )}
    </div>
  );
};

export default App;
