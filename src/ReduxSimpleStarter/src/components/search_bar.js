import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input
                    onChange={(event) => this.setState({ term: event.target.value })}
                    onFocus={this.onFocusChange}
                />
                <br/>
                value of the input : {this.state.term}
            </div>
        );
    }

    onFocusChange(event) {
        console.log('focus on');
    }
}

export default SearchBar;

