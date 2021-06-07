import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import ButtonReducer from "./Store/Reducers/ButtonReducer";
import ContactsReducer from "./Store/Reducers/ContactsReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Buttondata from "./Store/Actions/buttonActions";
import SagaButtonReducer from "./Store/Reducers/SagaButtonReducer"
import {watchButtonActions} from "./Store/Sagas/buttonActions.sagas"
import createSagaMiddleWare from "redux-saga";
const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(SagaButtonReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchButtonActions);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
