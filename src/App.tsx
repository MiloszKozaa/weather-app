import { AppTypes } from './App.types';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, dataSet] = useState({});
  const [location, locationSet] = useState('');
  const [lat, latSet] = useState('');
  const [lon, lonSet] = useState('');

  /*const searchLocation = (event: any) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response: any) => {
        dataSet(response.data);
        console.log(response.data);
      });
      locationSet('');
    }
  };*/

  const success = (position: any) => {
    const location = position.coords;
    latSet(location.latitude);
    lonSet(location.longitude);

    console.log('succes ready');
  };

  const error = (error: any) => {
    console.warn(`ERROR${error.code}: ${error.message}`);
  };

  useEffect(() => {
    console.log('navigator');
    navigator.geolocation.getCurrentPosition(success, error);
    console.log('axios');
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5d5354d7863de7c61b429e2ef6b79da2`
      )
      .then((response: any) => {
        dataSet(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          value={location}
          onChange={event => locationSet(event.target.value)}
          //onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </header>
    </div>
  );
};

export default App;
