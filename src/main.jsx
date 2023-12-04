import React from "react";
import ReactDOM from "react-dom/client";
import App from "./componets/App";
import "./index.css";
import ShopContextProvider from "./contexts/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
