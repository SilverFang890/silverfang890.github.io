import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import "./construction.css";
import Construction from "./Construction";
import Portfolio from "./Portfolio";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Construction />
);

// change to register to enable service workers
serviceWorker.unregister();
