import logo from "./logo.svg";
import "./App.css";
import FoodSearch from "./Components/FoodSearch";
import Position from "./Components/Position";
import ParentFunction from "./Components/ParentFuction";
import UseRefComponent from "./Components/UseRefComponent";
import ComponentOne from "./Components/Context/ComponentOne";
import { createContext, StrictMode, useState } from "react";
import Redux from "./Components/Context/Redux";
import UseEffectHook from "./Components/UseEffectHook";
import Modal from "./Components/Modal";
import GetDerivedStateFromProps from "./getDerivedStateFromProps";
import StateWise from "./Components/covid19/StateWise";
import Test from "./Components/Route/Test";
import ContactList from "./Components/ContactList/ContactList";
import SagaExample from "./Components/Redux-saga/SagaExample";

function App() {
  const [show, setshow] = useState(false);

  const onButtonClick = () => {
    setshow(true);
  };

  const onClickYes = () => {
    setshow(false);
    //hideModal();
  };

  const hideModal = () => {
    setshow(false);
  };

  return (
    <StrictMode>
      <div >
        {/* <ComponentOne /> */}
        {/* <UseEffectHook />  */}
        {/*   <button onClick={() => setshow(true)}>click me</button>
        <Modal show={show} hidemodal={hideModal} onClickYes={onClickYes} /> */}
        {/*   <Redux /> */}
        {/*    <FoodSearch /> */}
        {/*  <Position /> */}
        {/*  <ParentFunction /> */}
        {/*  <UseRefComponent /> */}
        {/* <GetDerivedStateFromProps favouriteColor="yellow" /> */}
      {/* <FoodSearch />  */}
         {/* <StateWise />  */}
        {/* <Test/>  */}
         {/* <ContactList/>  */}
         <SagaExample/>
      </div>
    </StrictMode>
  );
}

export default App;
