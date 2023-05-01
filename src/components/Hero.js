import Partners from './Partners';
import HeroForm from './HeroForm';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="hero__title" id="hero-title">
        Publish your podcasts{' '}
        <strong className="hero__title--strong">everywhere.</strong>
      </h1>
      <p className="hero__subtitle">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <Partners />
      <HeroForm aria-label="Pod request access submission form" />
    </section>
  );
};

export default Hero;
