import React from "react";

const Recipe = ({ calories, label, image }) => (
  <>
    <h1>{label}</h1>
    <p> {calories}</p>
    <img src={image} alt="empty" />
  </>
);

export default Recipe;
