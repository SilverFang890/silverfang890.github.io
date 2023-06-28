import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";
import App from "./App";
import Portfolio from "./Portfolio";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);

// change to register to enable service workers
serviceWorker.unregister();
