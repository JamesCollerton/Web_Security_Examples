import React from 'react'
import ReactDOM from 'react-dom'
import Message from './js/Message'
import './css/style.css'

/*
    This attaches to the HTML element 'react-container' and is used to inject the react into the page.
*/
ReactDOM.render(
    <Message />,
    document.getElementById('react-container') // eslint-disable-line no-undef
)

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef  
    module.hot.accept()                    // eslint-disable-line no-undef  
}