import './Output.css';
import { AppTypes } from '../App.types';

const Output = ({ outputValue }: AppTypes) => {
  return (
    <div>
      <div className='outputTitle'>Binary number</div>
      <div className='outputWrapper'>
        <div className='outputNumber'>{outputValue}</div>
      </div>
    </div>
  );
};

export default Output;
