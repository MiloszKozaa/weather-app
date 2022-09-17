import React from 'react';

export type AppTypes = {
  input?: number;
  output?: string;
  outputValue?: string | null | undefined;
  inputValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  link?: string;
  linkTitle?: string;
};
