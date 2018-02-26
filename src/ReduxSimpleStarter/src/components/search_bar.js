import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: 'yo man'};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}
                    onFocus={this.onFocusChange}
                />
                <br/>
                value of the input : {this.state.term}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    onFocusChange(event) {
        console.log('focus on');
    }
}

export default SearchBar;

