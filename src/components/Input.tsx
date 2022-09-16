import React, { useState } from 'react';
import { InputProps } from './Input.types';

const Input = ({ value, input }: InputProps) => {
  let a = new Array(100);

  const [outputValue, SetOutputValue] = useState<number | null>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (input !== NaN) {
      input = parseInt(event.target.value);
      binaryConversion(input);
      SetOutputValue(input);
    } else {
      SetOutputValue(0);
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
      console.log(a[index], index, inputNumber);
      index++;
      inputNumber = number;
    }
  };

  return (
    <>
      <input type='number' value={value} onChange={handleChange} />
      <p>{outputValue}</p>
    </>
  );
};

export default Input;
