import React, { Component } from 'react';
import ParameterBag from '../parameter-bag';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);

        const API_KEY = (new ParameterBag()).getParameter('OPEN_WEATHER_MAP_API_KEY');
        console.log(API_KEY);
    }
    onInputChange(event) {
        this.setState({term: event.target.value});
    }
    onFormSubmit(event) {
        event.preventDefault();
    }
    render()
    {
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <input
                    value={this.state.term}
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">
                        Search
                    </button>
                </span>
            </form>
        );
    }
}
