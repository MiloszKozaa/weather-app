import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const fetchText = async () => {
    let url = 'https://ipinfo.io/json?token=560b583d55512f';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  fetchText();

  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
};

export default App;
