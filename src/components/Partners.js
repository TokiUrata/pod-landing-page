import './Partners.scss';
import PARTNERS_DATA from '../data/partners-data.json';

const Partners = () => {
  return (
    <ul className="partners">
      {PARTNERS_DATA.map((item) => (
        <li key={item.id} className="partners__item">
          <img
            className={`partners__image partners__image--${item.class}`}
            src={require(`../assets/images/logos/${item.logo}`)}
            alt={item.title}
            aria-label={item.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default Partners;
