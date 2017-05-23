import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
  render () {
    const renderWeather = (cityData) => {
      const name = cityData.city.name
      const temps = cityData.list.map((weather) => weather.main.temp);
      const pressures = cityData.list.map((weather) => weather.main.pressure)
      const humidities = cityData.list.map((weather) => weather.main.humidity)
      const { lon, lat } = cityData.city.coord
      return (
        <tr key={name}>
          <td><GoogleMap lng={lon} lat={lat}/></td>
          <td><Chart color={'orange'} data={temps} units='K'/></td>
          <td><Chart color={'green'} data={pressures} units='hPa'/></td>
          <td><Chart color={'black'} data={humidities} units="%"/></td>
        </tr>
      )
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }; // { weather } === { weather.weather }
}


export default connect(mapStateToProps)(WeatherList);
