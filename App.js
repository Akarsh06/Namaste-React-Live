import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement('h1', {
id: 'h1',
style: {color: 'red',fontSize: '80px'}
}, 'heading1');

const heading2 = React.createElement('h2', {}, 'heading2');

const container = React.createElement('container', {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);