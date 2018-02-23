import React from 'react';
import ReactDOM from 'react-dom'

// create a new component. This component should produce some html
/*
const App = function() {
    return <div>Hi !</div>
}
*/
const App = () => {
    return <div>Hi !!</div>
}

// take this components generated htmland put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
