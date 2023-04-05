import logo from '../assets/images/logos/logo.svg';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <header className="main-header">
      <a className="main-header__link" href="/">
        <img className="main-header__logo" src={logo} alt="Pod logo" />
      </a>
    </header>
  );
};

export default MainHeader;
