import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';

	
const PLACES = [
  { name: "COLUMBIA", zip: "65211" },
  { name: "NOGINSK", zip: "142432" },
  { name: "MOSKVA", zip: "125009" },
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
        <img class="rot" src="https://www.flaticon.com/svg/vstatic/svg/814/814513.svg?token=exp=1615592702~hmac=ffdb7e608ae55b714adbb57b245c6067"/>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <div id="gtr">
          <p>
          <img id="tre" src="https://www.flaticon.com/svg/vstatic/svg/2932/2932604.svg?token=exp=1615591783~hmac=08d3c5477041589b048fbc0aab732c3d"/>
          Текущая температура: {weatherData.main.temp}°</p>
        </div>
        <div id="gtr">
          <p>
          <img id="tre" src="https://www.flaticon.com/svg/vstatic/svg/2932/2932604.svg?token=exp=1615591783~hmac=08d3c5477041589b048fbc0aab732c3d"/>
          Высшая температура: {weatherData.main.temp_max}°</p>
        </div>
        <div id="gtr">
          <p>
          <img id="tre" src="https://www.flaticon.com/svg/vstatic/svg/2932/2932604.svg?token=exp=1615591783~hmac=08d3c5477041589b048fbc0aab732c3d"/>
          Низшая температура: {weatherData.main.temp_min}°</p>
        </div>
        <div id="gtr">
          <p>
          <img id="tre" src="https://www.flaticon.com/svg/vstatic/svg/2932/2932604.svg?token=exp=1615591783~hmac=08d3c5477041589b048fbc0aab732c3d"/>
          Скорость ветра: {weatherData.wind.speed} mi/hr</p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
      </div>
    );
  }
}

export default App;