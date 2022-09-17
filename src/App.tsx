import './App.css';
import React, { useState } from 'react';
import { AppTypes } from './App.types';
import Output from './components/Output';
import Input from './components/Input';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ input, output }: AppTypes) => {
  let a = new Array(100);

  const [outputValue, SetOutputValue] = useState<string | null | undefined>(
    '0'
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    input = parseInt(event.target.value);

    if (event.target.value.length !== 0) {
      console.log('number');
      binaryConversion(input);
      SetOutputValue(output);
    } else {
      SetOutputValue('0');
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
      <div className='App-header'>
        <Header />
        <div className='calculator'>
          <Input
            inputValue={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event);
            }}
          />
          <Output outputValue={outputValue}></Output>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
