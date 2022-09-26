import SearchLocation from './components/SearchLocation';
import ShowWeather from './components/ShowWeather';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [location, locationSet] = useState<string>('');
  const [weatherData, weatherDataSet] = useState({
    weather: [
      {
        main: '',
        icon: '',
      },
    ],
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
    },
    wind: {
      speed: 0,
    },
    name: '',
  });
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

  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/image/${weatherData.weather[0].icon}-min.png)`,
      }}>
      <Header />
      <SearchLocation
        value={location}
        onChange={(event: any) => locationSet(event.target.value)}
        onKeyPress={getCityLocation}
      />
      <ShowWeather weatherData={weatherData} />
      <Footer />
    </div>
  );
};

export default App;
