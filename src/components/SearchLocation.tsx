import axios from 'axios';
import { useState } from 'react';

type SearchLocation = {
  value?: string;
  onChange: (event: any) => void;
  onKeyPress: (event: any) => void;
}

const SearchLocation = ({value, onChange, onKeyPress}: SearchLocation) => {

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder='Enter Location'
      />
    </>
  );
};

export default SearchLocation;
