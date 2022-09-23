import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ShowWeather from './ShowWeather';

type WeatherData = {
  lat?: number;
  lon?: number;
};

const WeatherData = ({ lat, lon }: WeatherData) => {
  const [weatherData, weatherDataSet] = useState({});
  useEffect(() => {
    console.log('asdasdasd', lat, lon);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5d5354d7863de7c61b429e2ef6b79da2`
      )
      .then((res: any) => {
        weatherDataSet(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      {weatherData.timezone ? <ShowWeather name={weatherData.timezone} /> : ''}
    </>
  );
};

export default WeatherData;
