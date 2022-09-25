import { MainWeatherDataTypes } from '../App.types';
import Icon from './Icon';
import './MainWeatherData.css';

const MainWeatherData = ({ city, temp, desc }: MainWeatherDataTypes) => {
  return (
    <div className='MainWeatherData_wrapper'>
      <div className='MainWeatherData_location'>
        <Icon iconName='location' />
        {city}
      </div>
      <div className='MainWeatherData_temp'>{temp}°</div>
      <div className='MainWeatherData_desc'>{desc}</div>
    </div>
  );
};

export default MainWeatherData;
