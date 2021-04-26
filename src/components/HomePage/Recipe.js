import React from "react";

const Recipe = ({ name, recipe, setActive }) => {
  return (
    <div
      onClick={() => setActive(true)}
      style={{ width: "350px", height: "309px" }}
    >
      <h2>Ingredients</h2>
      <hr></hr>
      <h3>{name}</h3>
      <ul>
        <li>2 tablespoons finely ground dark roast coffee</li>
        <li>4 ounces water</li>
      </ul>
      <p>{recipe}</p>
      <ul>
        <li>4 ounces milk</li>
      </ul>
    </div>
  );
};
export default Recipe;
