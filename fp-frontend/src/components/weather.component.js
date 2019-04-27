import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temp: '',
            humidity: '',
            wind: '',
            search: 'Sofia'
        };

        this.sum = (event) => {
            this.setState({ search: event.target.value.toLowerCase() });
            console.log(this.state.search);
            this.fetchWeather();
        };
        this.onChange = (name) => (event) => {
            this.setState({
                [name]: (event.target.value)
            });
        }
    }

    fetchWeather = () => {
        fetch(`http://localhost:5000/weather/${this.state.search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    temp: Math.round(data.data.main.temp - 273.15) + '°',
                    city: data.data.name,
                    humidity: data.data.main.humidity + '%',
                    wind: Math.round(data.data.wind.speed) + ' mph',
                });
            })
            .catch(err => console.log(err));
    }

    componentWillMount() {
        this.fetchWeather();
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.search} onChange={this.onChange('search')} placeholder="Search for a city..." aria-label="City's name" aria-describedby="button"></input>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-info" onClick={this.sum} id="button">Search</button>
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">City: {this.state.city}</li>
                    <li className="list-group-item">Temp: {this.state.temp}</li>
                    <li className="list-group-item">Humidity {this.state.humidity}</li>
                    <li className="list-group-item">Wind: {this.state.wind}</li>
                </ul>
            </div>
        );
    }
}
export default Weather;