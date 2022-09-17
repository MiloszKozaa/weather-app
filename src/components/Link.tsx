import { AppTypes } from '../App.types';
import './Link.css';

const Link = ({ link, linkTitle }: AppTypes) => {
  return (
    <a className='link' target='_blank' href={link}>
      {linkTitle}
    </a>
  );
};

export default Link;
