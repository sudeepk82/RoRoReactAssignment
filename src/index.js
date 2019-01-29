import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let tags = [
    {"id": 1, "name": "Services Sales Skills and the Whiteboard Methodology", "color": "red"},
    {"id": 2, "name": "The Value behind Technology Support Services: From Reactive to Proactive", "color": "green"},
    {"id": 3, "name": "Success Factors", "color": "gray"},
    {"id": 4, "name": "Selling Value", "color": "violet"},
    {"id": 5, "name": "Best Practice", "color": "yellow"}
];

let modules = [
    {"id": 1, "name": "Welcome to the Academy"},
    {"id": 2, "name": "Whiteboard Selling Methodology", "tagId": 1, "mandatory": true, "completed": true},
    {"id": 3, "name": "Basic Sales Skills", "tagId": 1, "mandatory": true, "completed": true},
    {"id": 4, "name": "Client Stories", "tagId": 1, "mandatory": true, "completed": true},
    {"id": 5, "name": "Break=Fix", "tagId": 2, "mandatory": true, "completed": true},
    {"id": 6, "name": "Integrated HW+SW Support", "tagId": 2, "mandatory": true, "completed": true},
    {"id": 7, "name": "Multi-Vendor Services and Managed Services", "tagId": 2, "mandatory": true},
    {"id": 8, "name": "People, Process and Technology", "tagId": 3, "mandatory": true, "completed": false},
    {"id": 9, "name": "Linking Whiteboard to Value and Offerings", "tagId": 4, "mandatory": true, "completed": false},
    {"id": 10, "name": "Best Practice", "tagId": 5, "mandatory": true, "completed": false},
    {"id": 11, "name": "Business Partner Best Practice", "tagId": 5, "mandatory": true, "completed": false},
    {"id": 12, "name": "Geography Specific Modules", "completed": false},
    {"id": 13, "name": "What's next?", "mandatory": true, "completed": false}
];

ReactDOM.render(<App modules={modules} tags={tags} />, document.getElementById('root'));

document.getElementById("module"+modules.length).classList.add("last-module");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
