import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import store from "@/store";
import { Theme } from "./theme";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Theme>
          <App />
        </Theme>
      </Provider>
    </Router>
  </React.StrictMode>
);
