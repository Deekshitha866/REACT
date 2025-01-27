import React from "react";
import ReactDOM from "react-dom/client";

const paragraph=React.createElement("header",{class:"title"},
    React.createElement("div",{},"hey this is h1"),
    React.createElement("div",{},"hey this is is h2"),
    React.createElement("div",{},"hey this is h3"),
)
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(paragraph);
<hr></hr>