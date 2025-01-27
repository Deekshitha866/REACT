import React from "react";
import ReactDOM from "react-dom/client";

const header=<div class="title">
    <h1>Hello this is H1 from jsx</h1>
    <h2>Hello this is H2</h2>
    <h3>Hello this is H3 from jsx</h3>
    <h4>Hello this is H4</h4>
</div>
const root=ReactDOM.createRoot(document.getElementById("root2"));
root.render(header);

