import SearchLocation from './components/SearchLocation';
import ShowWeather from './components/ShowWeather';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [location, locationSet] = useState<string>('');
  const [weatherData, weatherDataSet] = useState({
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
    },
    wind: {
      speed: 0,
    },
    name: '',
    timezone: 0,
  });
  const [time, timeSet] = useState<string>('00:00:00');
  const [date, dateSet] = useState<string>('01/01/2000');
  const getWeatherData = (latParametr: number, lonParametr: number) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latParametr}&lon=${lonParametr}&appid=5d5354d7863de7c61b429e2ef6b79da2&units=metric`
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
          getWeatherData(res.data[0].lat, res.data[0].lon);
          console.log(res.data[0].name, res.data[0].lat, res.data[0].lon);
        });
      locationSet('');
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: any) => {
        getWeatherData(position.coords.latitude, position.coords.longitude);
      },
      (error: any) => {
        console.warn(`ERROR${error.code}: ${error.message}`);
      }
    );
  }, []);

  setTimeout(() => {
    let date = new Date();
    console.log(weatherData.timezone);
    timeSet(
      `${
        date.getHours() - 2 + weatherData.timezone / 3600
      }:${date.getMinutes()}:${date.getSeconds()}`
    );
    dateSet(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
  }, 1000);

  return (
    <div className='App'>
      <SearchLocation
        value={location}
        onChange={(event: any) => locationSet(event.target.value)}
        onKeyPress={getCityLocation}
      />
      <ShowWeather weatherData={weatherData} time={time} date={date} />
    </div>
  );
};

export default App;
