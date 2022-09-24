import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchLocation from './components/SearchLocation';

// http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=5d5354d7863de7c61b429e2ef6b79da2

// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5d5354d7863de7c61b429e2ef6b79da2

const App = () => {
  const [lat, latSet] = useState<number>(0);
  const [lon, lonSet] = useState<number>(0);
  const [location, locationSet] = useState<string>('');
  const [weatherData, weatherDataSet] = useState({});

  const getWeatherData = (latParametr: number, lonParametr: number) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latParametr}&lon=${lonParametr}&appid=5d5354d7863de7c61b429e2ef6b79da2`
      )
      .then((res: any) => {
        weatherDataSet(res.data);
        console.log(res.data);
      });
  };

  const getCityLocation = (event: any) => {
    if (event.key === 'Enter') {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=5d5354d7863de7c61b429e2ef6b79da2`
        )
        .then((res: any) => {
          latSet(res.data[0].lon);
          lonSet(res.data[0].lat);
          console.log(res.data[0].name, res.data[0].lat, res.data[0].lon);
        });
      getWeatherData(lat, lon);
      locationSet('');
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <SearchLocation
          value={location}
          onChange={(event: any) => locationSet(event.target.value)}
          onKeyPress={getCityLocation}
        />
      </header>
    </div>
  );
};

export default App;
