import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/home.css";
import "./styles/products.css";
import "./styles/origin.css";
import "./styles/wholesale.css";
import "./styles/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);