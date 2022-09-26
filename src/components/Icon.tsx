import { IconTypes } from '../App.types';

const Icon = ({ iconName }: IconTypes) => {
  return <img src={`${process.env.PUBLIC_URL}/icon/${iconName}.png`} alt='icon' />;
};

export default Icon;
