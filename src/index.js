import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";

import "./construction_page/construction.css";
import "./styles/styles.css";
import "./styles/responsive_styles.css";
import Construction from "./construction_page/Construction";
import Portfolio from "./Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Portfolio />
);

// change to register to enable service workers
serviceWorker.register();
