import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "./layout/Heading";
import Footer from "./layout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Heading />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
