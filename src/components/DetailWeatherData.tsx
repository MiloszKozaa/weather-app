import { DetailWeatherDataTypes } from '../App.types';
import Icon from './Icon';
import './DetailWeatherData.css';

const DetailWeatherData = ({
  tempMax,
  tempMin,
  wind,
  pressure,
}: DetailWeatherDataTypes) => {
  return (
    <div className='DetailWeatherData_wrapper'>
      <div className='DetailWeatherData_detail'>
        <Icon iconName='temp' />
        {tempMax}° / {tempMin}°
      </div>
      <div className='DetailWeatherData_detail'>
        <Icon iconName='pressure' />
        {pressure} hPa
      </div>
      <div className='DetailWeatherData_detail'>
        <Icon iconName='wind' />
        {wind} km/h
      </div>
    </div>
  );
};

export default DetailWeatherData;
