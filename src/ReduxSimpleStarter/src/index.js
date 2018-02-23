import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCXH3HFy7bufyh6eFL2r7qnXJ3zbdtuQd8';

// create a new component. This component should produce some html
/*
const App = function() {
    return <div>Hi !</div>
}
*/
const App = () => {
    return (
        <div>
            Hi !! <SearchBar />
        </div>
    );
}

// take this components generated htmland put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
