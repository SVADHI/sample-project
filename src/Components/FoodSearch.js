import axios from "axios";
import React, { useState } from "react";
import Recipe from "./Recipe";

const FoodSearch = () => {
  const [recepies, setRecepies] = useState([]);
  const [query, setQuery] = useState("");
  const APP_KEY = "162a0bb42178e31553891ebb1cdc2255";
  const APP_ID = "c7784bee";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(url);
    const items = await result.data.hits;
    console.log(items);
    setRecepies(items);
  };

  const searchInput = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const onSubmitSearch = () => {
    getData();
  };
  return (
    <>
      <h1> Food Search </h1>
      <input type="text" placeholder="search for food" onChange={searchInput} />
      <button onClick={onSubmitSearch}>submit</button>

      {recepies.map((recepie) => {
        return (
          <Recipe
            key={recepie.recipe.label}
            label={recepie.recipe.label}
            calories={recepie.recipe.calories}
            image={recepie.recipe.image}
          />
        );
      })}
    </>
  );
};

export default FoodSearch;
