import React from "react";

const Recipe = ({ calories, label, image, ingredients }) => (
  <>
    <h1>{label}</h1>
    <p> {calories}</p>
    {ingredients.map((ingrident) => {
      return <li>{ingrident.text}</li>;
    })}
    <img src={image} alt="empty" />
  </>
);

export default Recipe;
