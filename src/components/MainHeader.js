import logo from '../assets/images/logos/logo.svg';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <header className="main-header" role="banner">
      <a className="main-header__link" href="/" aria-label="Pod home page">
        <img
          className="main-header__logo"
          src={logo}
          alt="Pod logo"
          aria-label="Pod logo"
        />
      </a>
    </header>
  );
};

export default MainHeader;
