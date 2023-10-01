import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/scss/banner.css";
import LoadAPI from "./views/components/Component/Component-child/LoadAPI";
import Example from "./views/Example";
import ShowCard from "./views/components/Component/Component-child/ShowCard";
import AdminIndex from "./views/components/Admin/Admin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AdminIndex/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
