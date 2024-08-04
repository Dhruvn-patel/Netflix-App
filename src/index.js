import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //react re render twice to check functionality (only development )
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
