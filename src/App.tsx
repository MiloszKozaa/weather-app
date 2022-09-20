import { AppTypes } from './App.types';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, dataSet] = useState({});
  const [location, locationSet] = useState('');
  const [latitude, latitudeSet] = useState('');
  const [longitude, longitudeSet] = useState('');

  const searchLocation = (event: any) => {
    if (event.key === 'Enter') {
      let urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=5d5354d7863de7c61b429e2ef6b79da2`;
      axios.get(urlLocation).then((response: any) => {
        latitudeSet(response.data[0].lat);
        longitudeSet(response.data[0].lon);
        console.log(
          response.data[0].name,
          response.data[0].lat,
          response.data[0].lon
        );
      });

      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5d5354d7863de7c61b429e2ef6b79da2`;

      axios.get(url).then((response: any) => {
        dataSet(response.data);
        console.log(response.data);
      });
      locationSet('');
    }
  };

  const success = (position: any) => {
    const location = position.coords;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=5d5354d7863de7c61b429e2ef6b79da2`;
    axios.get(url).then((response: any) => {
      dataSet(response.data);
      console.log(response.data);
    });
  };

  const error = (error: any) => {
    console.warn(`ERROR${error.code}: ${error.message}`);
  };

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert('Sorry , browser does not support geolocation!');
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          value={location}
          onChange={event => locationSet(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </header>
    </div>
  );
};

export default App;
