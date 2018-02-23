import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} onFocus={(event) => console.log(event)}/>;
    }

    onInputChange(event) {
        console.log('input changed'+event.target.value);
    }
}

export default SearchBar;

