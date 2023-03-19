import spotify from '../assets/desktop/spotify.svg';
import applePodcast from '../assets/desktop/apple-podcast.svg';
import googlePodcasts from '../assets/desktop/google-podcasts.svg';
import pocketCasts from '../assets/desktop/pocket-casts.svg';
import './Partners.scss';

const Partners = () => {
  return (
    <ul className="partners">
      <li className="partners__item">
        <img
          className="partners__image partners__image--spotify"
          src={spotify}
          alt="Spotify"
        />
      </li>
      <li className="partners__item">
        <img
          className="partners__image partners__image--apple"
          src={applePodcast}
          alt="Apple Podcast"
        />
      </li>
      <li className="partners__item">
        <img
          className="partners__image partners__image--google"
          src={googlePodcasts}
          alt="Google Podcasts"
        />
      </li>
      <li className="partners__item">
        <img
          className="partners__image partners__image--pocket"
          src={pocketCasts}
          alt="Pocket Casts"
        />
      </li>
    </ul>
  );
};

export default Partners;
