import Button from '../UI/Button';
import './HeroForm.scss';

const HeroForm = () => {
  const addEmailHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="hero-form" onSubmit={addEmailHandler}>
        <input
          className="hero-form__input"
          type="text"
          placeholder="Email address"
        />
        <Button type="submit">Request Access</Button>
      </form>
    </>
  );
};

export default HeroForm;
