import { AppTypes } from '../App.types';
import './Input.css';

const Input = ({ inputValue }: AppTypes) => {
  return (
    <div>
      <div className='inputTitle'>Decimal number</div>
      <input
        className='inputNumber'
        type='number'
        placeholder='write number...'
        onChange={inputValue}
      />
    </div>
  );
};

export default Input;
