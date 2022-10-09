import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import TodoApp from "./containers/TodoApp";

ReactDOM.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>,
    document.getElementById("root")
);