import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom";
import { ZuringTheWorld } from "./components/zuring-the-world.js"
import './index.css'; 

ReactDOM.render(
  <React.StrictMode>
    <ZuringTheWorld />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
