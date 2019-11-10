import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
import './css/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

/*
    This attaches to the HTML element 'react-container' and is used to inject the react into the page.
*/
ReactDOM.render(
    <App />,
    document.getElementById('react-container') // eslint-disable-line no-undef
)

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef  
    module.hot.accept()                    // eslint-disable-line no-undef  
}