import React, {Component} from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {

    renderCityList() {
        return this.props.weather.map( (cityWeather) => {
            return (
                <tr>
                    <td>{cityWeather.city.name}</td>
                    <td>{cityWeather.city.coord.lat}</td>
                    <td>{cityWeather.city.coord.lon}</td>
                    <td>{cityWeather.city.country}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Température</th>
                        <th>Pression</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderCityList() }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

/*
function mapStateToProps( { weather } ) {
    return { weather }; // { weather } === { weather:weather }
}
*/

export default connect(mapStateToProps)(WeatherList);
