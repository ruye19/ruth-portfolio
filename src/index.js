import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
import favicon from './assets/favicon.ico';
const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
