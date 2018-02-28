import React, { Component } from 'react';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {term: ''};
    }
    render() {
        return (
            <form className="input-group">
                <input
                    value={this.state.term}
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    onChange={(event)=> this.setState({term: event.target.value})}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Search</button>

                </span>
            </form>
        );
    }
}
