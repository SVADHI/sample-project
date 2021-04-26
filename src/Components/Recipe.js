import React from "react";
import "./Recipe.css";
const Recipe = ({ calories, label, image, ingredients }) => (
  <>
    <div className="recipe">
      <h1>{label}</h1>
      <ol>
        {ingredients.map((ingrident, index) => {
          return <li key={index}>{ingrident.text}</li>;
        })}
      </ol>
      <p> {calories}</p>
      <img src={image} alt="empty" />
    </div>
  </>
);

export default Recipe;
