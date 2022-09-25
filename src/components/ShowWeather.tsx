type ShowWeather = {
  time?: string;
  date?: string;
  weatherData: {
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
    name: string;
    timezone: number;
  };
};

// dupa ? console.log('true') : console.log('false');

const ShowWeather = ({ weatherData, time, date }: ShowWeather) => {
  if (weatherData.name !== '') {
    return (
      <>
        <div>City: {weatherData.name}</div>
        <div>
          {date} {time}
        </div>
        <div>Timezone: {weatherData.timezone / 3600}</div>
        <div>Tempereture: {weatherData.main.temp}</div>
        <div>
          Temperature min/max: {weatherData.main.temp_min} /{' '}
          {weatherData.main.temp_max}
        </div>
        <div>Temperature feels: {weatherData.main.feels_like}</div>
        <div>Pressure: {weatherData.main.pressure}</div>
        <div>Wind speed: {weatherData.wind.speed}</div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ShowWeather;
