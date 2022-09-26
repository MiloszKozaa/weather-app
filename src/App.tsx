import SearchLocation from './components/SearchLocation';
import ShowWeather from './components/ShowWeather';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { url } from 'inspector';

const App = () => {
  const [location, locationSet] = useState<string>('');
  const [weatherData, weatherDataSet] = useState({
    weather: [
      {
        main: '',
        icon: '03d',
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
//  const [time, timeSet] = useState<string>('00:00:00');
//  const [date, dateSet] = useState<string>('01/01/2000');
  const getWeatherData = (latParametr: number, lonParametr: number) => {
    let date = new Date();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latParametr}&lon=${lonParametr}&appid=5d5354d7863de7c61b429e2ef6b79da2&units=metric`
      )
      .then((res: any) => {
        weatherDataSet(res.data);
        console.log(res.data);
      });

//    timeSet(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//    dateSet(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
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
        backgroundImage: `url(${process.env.PUBLIC_URL}/image/${weatherData.weather[0].icon}.png)`,
      }}>
      <Header />
      <SearchLocation
        value={location}
        onChange={(event: any) => locationSet(event.target.value)}
        onKeyPress={getCityLocation}
      />
      <ShowWeather weatherData={weatherData}/>
      <Footer />
    </div>
  );
};

export default App;
