import { IconTypes } from '../App.types';
import './Icon.css';

const Icon = ({ iconName }: IconTypes) => {
  return <img src={`${process.env.PUBLIC_URL}/icon/${iconName}.png`} alt='icon' />;
};

export default Icon;
