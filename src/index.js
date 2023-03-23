import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
