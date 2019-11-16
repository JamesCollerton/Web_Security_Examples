import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/components/App'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './css/style.css'

import './js/utils/logging'

// TODO: May need these
// import $ from 'jquery'; 
// import Popper from 'popper.js';


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