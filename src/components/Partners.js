import './Partners.scss';

const PARTNERS_DATA = [
  {
    id: 'pa-01',
    title: 'Spotify',
    logo: 'spotify.svg',
    class: 'spotify',
  },
  {
    id: 'pa-02',
    title: 'Apple Podcast',
    logo: 'apple-podcast.svg',
    class: 'apple',
  },
  {
    id: 'pa-03',
    title: 'Google Podcasts',
    logo: 'google-podcasts.svg',
    class: 'google',
  },
  {
    id: 'pa-04',
    title: 'Pocket Casts',
    logo: 'pocket-casts.svg',
    class: 'pocket',
  },
];

const Partners = () => {
  return (
    <ul className="partners">
      {PARTNERS_DATA.map((item) => (
        <li key={item.id} className="partners__item">
          <img
            className={`partners__image partners__image--${item.class}`}
            src={require(`../assets/desktop/${item.logo}`)}
            alt={item.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default Partners;
