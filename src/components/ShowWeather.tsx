import { ShowWeatherTypes } from '../App.types';
import MainWeatherData from './MainWeatherData';
import DetailWeatherData from './DetailWeatherData';

/*
<div>{weatherData.weather[0].icon}</div>
<div>{date} {time}</div>
*/

const ShowWeather = ({ weatherData, time, date }: ShowWeatherTypes) => {
  if (weatherData.name !== '') {
    return (
      <>
        <MainWeatherData
          city={weatherData.name}
          temp={weatherData.main.temp.toFixed()}
          desc={weatherData.weather[0].main}
        />
        <DetailWeatherData
          tempMax={weatherData.main.temp_max.toFixed()}
          tempMin={weatherData.main.temp_min.toFixed()}
          pressure={weatherData.main.pressure}
          wind={weatherData.wind.speed.toFixed()}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default ShowWeather;
