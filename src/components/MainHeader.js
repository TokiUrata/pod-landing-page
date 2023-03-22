import logo from '../assets/images/logos/logo.svg';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <div className="main-header">
      <a className="main-header__link" href="/">
        <img className="main-header__logo" src={logo} alt="Pod logo" />
      </a>
    </div>
  );
};

export default MainHeader;
