import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { api } from "./app/services/baseApi";
import { BrowserRouter } from "react-router-dom";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import "./sass/styles.scss";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
