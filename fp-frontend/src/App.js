import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './App.css';

class App extends Component {
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
            this.setState({search: event.target.value.toLowerCase()});
            console.log(this.state.search);
            this.fetchWeather();
        };
        this.onChange = (name) => (event) =>{
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
            <div className="App">
                    <label>
                        <input type="text" value={this.state.search} onChange={this.onChange('search')} />
                    </label>
                    <button onClick={this.sum}> Search </button>
                <List component="nav" style={{
                    width: 300,
                    color: "white",
                    backgroundColor: "#282c34"
                }}>
                    <ListItem button >
                        <ListItemText disableTypography primary={this.state.city} style={{ color: "white" }} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography primary={this.state.temp} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography primary={this.state.humidity} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography primary={this.state.wind} />
                    </ListItem>
                </List>
            </div>
        );
    }
}
export default App;