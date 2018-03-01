import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderCity(cityData) {
        const temps = cityData.list.map((value) => { return value.main.temp; });
        return (
            <tr key={cityData.city.id + cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart values={temps} color="red"/>
                </td>
                <td>
                    <Chart values={cityData.list.map(value => value.main.pressure)} color="green"/>
                </td>
                <td>
                    <Chart values={cityData.list.map(value => value.main.humidity)} color="blue"/>
                </td>
            </tr>
        );
    };

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
                    { this.props.weather.map(this.renderCity) }
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
