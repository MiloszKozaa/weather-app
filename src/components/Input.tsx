import React from 'react';

type InputProps = {
  value?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input type='number' value={props.value} onChange={props.handleChange} />
  );
};

export default Input;
