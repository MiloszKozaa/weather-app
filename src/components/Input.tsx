import { useState } from 'react';
import React from 'react';
import Output from './Output';

const Input = () => {
  let binaryNumber = '';
  let index = 1;
  let number = 1;
  let a = new Array(100);
  const [input, setInput] = useState<number>();

  const divide = (a: number, b: number): number => {
    return Math.round(a / b - 0.5);
  };

  const getInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let inputNumber = parseInt(event.target.value);
    setInput(inputNumber);
    console.log(inputNumber);
    while (number !== 0) {
      number = divide(inputNumber, 2);
      a[index] = inputNumber % 2;
      index++;
      inputNumber = number;
    }

    for (let j = index - 1; j > 0; j--) {
      binaryNumber = binaryNumber + a[j];
    }
  };

  return (
    <div>
      Choose your number:
      <input
        type='number'
        className='input'
        onChange={getInputValue}
        value={input}
      />
      <Output output={parseInt(binaryNumber)} />
    </div>
  );
};

export default Input;
