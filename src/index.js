// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App";
// import './index.css'
//
// ReactDom.render(<App/>, document.querySelector('#root'))



import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);