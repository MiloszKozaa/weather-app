import React from 'react';

interface Output {
  output?: number;
}

const Output: React.FC<Output> = (props: Output) => {
  return (
    <div>
      <div>{props.output}</div>
    </div>
  );
};

export default Output;
