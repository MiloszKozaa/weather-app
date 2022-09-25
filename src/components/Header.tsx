import './Header.css';
import Link from './Link';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerLogo'>
        <Link
          link='https://github.com/MiloszKozaa/weather-app'
          linkTitle='weather'
        />
        app
      </div>
      <div className='headerMade'>
        Site made by
        <Link link='https://github.com/MiloszKozaa' linkTitle='Miłosz Koza' />
      </div>
    </div>
  );
};

export default Header;
