import './Header.css';
import Link from './Link';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerLogo'>
        <Link
          link='https://en.wikipedia.org/wiki/Binary_number'
          linkTitle='binary'
        />
        calculator
      </div>
      <div className='headerMade'>
        Site made by
        <Link link='https://github.com/MiloszKozaa' linkTitle='Miłosz Koza' />
      </div>
    </div>
  );
};

export default Header;
