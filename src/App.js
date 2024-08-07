import React, {Component} from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import "./App.css"

const apiKey = "e36ed364400282e43250b6c4c0274d44"; 

class App extends Component {

  state = {
    temp : '',
    city : '',
    country : '',
    humidity : '',
    description : '',
    error : '',
  }

  getWeather = async(e) => {
    e.preventDefault();

    const city = e.target.city.value;
    const country = e.target.country.value;

    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`)
    const data = await api.json();
    
    if (city && country) {
      this.setState ({  
        temp        : data.main.temp,
        city        : data.name,
        country     : data.sys.country,
        humidity    : data.main.humidity,
        description : data.weather[0].description,
        error       : '',
      })
    } else {
      this.setState ({
        error : 'Please Enter Data',
      })
    }

  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather}/>
          <Weather
          temp =        {this.state.temp}
          city =        {this.state.city}  
          country =     {this.state.country}
          humidity =    {this.state.humidity}
          description = {this.state.description}
          error =       {this.state.error}
          />
        </div>
      </div>
    );
  }
}
export default App;
