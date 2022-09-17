import React, { useState } from 'react';
import { ConversionProps } from './Conversion.types';
import Output from './Output';

const Input = ({ value, input, output }: ConversionProps) => {
  let a = new Array(100);

  const [outputValue, SetOutputValue] = useState<string | null>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    input = parseInt(event.target.value);

    if (event.target.value.length !== 0) {
      console.log('number');
      binaryConversion(input);
      SetOutputValue(output);
    } else {
      SetOutputValue(null);
    }
  };

  const divide = (a: number, b: number): number => {
    return Math.round(a / b - 0.5);
  };

  const binaryConversion = (inputNumber: number) => {
    let number = 1;
    let index = 1;
    console.log('NEW NUMBER');
    while (number !== 0) {
      number = divide(inputNumber, 2);
      a[index] = inputNumber % 2;
      console.log(`i:${index}   ${a[index]} | ${inputNumber}`);
      index++;
      inputNumber = number;
    }

    output = a.reverse().toString().replaceAll(',', '');
  };

  return (
    <>
      <input type='number' onChange={handleChange} />
      <Output outputValue={outputValue}></Output>
    </>
  );
};

export default Input;
