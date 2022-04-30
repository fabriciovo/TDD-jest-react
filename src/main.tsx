import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register />} />

    </BrowserRouter>
  </React.StrictMode>
);
