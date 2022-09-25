import { SearchLocationTypes } from '../App.types';
import './SearchLocation.css';
import Icon from './Icon';

const SearchLocation = ({
  value,
  onChange,
  onKeyPress,
}: SearchLocationTypes) => {
  return (
    <div className='SearchLocation_wrapper_input'>
      <Icon iconName='search' />
      <input
        type='text'
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder='Enter Location'
        className='SearchLocation_input'
      />
      <Icon iconName='null' />
    </div>
  );
};

export default SearchLocation;
