import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './navigation.json';

let tags = data.tags;
let modules = data.modules;

ReactDOM.render(<App modules={modules} tags={tags} />, document.getElementById('root'));

document.getElementById("module"+modules.length).classList.add("last-module");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
