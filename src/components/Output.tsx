import './Output.css';
type OutputValue = {
  outputValue?: string | null | undefined;
};
const Output = ({ outputValue }: OutputValue) => {
  return (
    <>
    <div className='outputTitle'>Binary number</div>
      <div className='outputWrapper'>
        <div className='outputNumber'>{outputValue}</div>
      </div>
    </>
  );
};

export default Output;
