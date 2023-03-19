import './Hero.scss';
import Partners from './Partners';
import HeroForm from './HeroForm';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">
        Publish your podcasts{' '}
        <strong className="hero__title--strong">everywhere.</strong>
      </h1>
      <p className="hero__subtitle">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <Partners />
      <HeroForm />
    </div>
  );
};

export default Hero;
