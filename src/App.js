import logo from "./logo.svg";
import "./App.css";
import FoodSearch from "./Components/FoodSearch";
import Position from "./Components/Position";
import ParentFunction from "./Components/ParentFuction";
import UseRefComponent from "./Components/UseRefComponent";
import ComponentOne from "./Components/Context/ComponentOne";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <div className="App">
        <ComponentOne />
        {/*    <FoodSearch /> */}
        {/*  <Position /> */}
        {/*  <ParentFunction /> */}
        {/*  <UseRefComponent /> */}
      </div>
    </StrictMode>
  );
}

export default App;
