import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [city, citySet] = useState<string>();
  const [postal, postalSet] = useState<string>();
  const [timezone, timezoneSet] = useState<string>();

  const fetchText = async () => {
    let url = 'https://ipinfo.io/json?token=560b583d55512f';
    let response = await fetch(url);
    let data = await response.json();
    citySet(data.city);
    postalSet(data.postal);
    timezoneSet(data.timezone);
  };

  fetchText();

  return (
    <div className='App'>
      <header className='App-header'>
        <div>city: {city}</div>
        <div>postal: {postal}</div>
        <div>timezone: {timezone}</div>
      </header>
    </div>
  );
};

export default App;
