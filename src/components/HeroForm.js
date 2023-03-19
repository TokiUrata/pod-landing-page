import Buttton from '../UI/Buttton';
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
        <Buttton type="submit">Request Access</Buttton>
      </form>
    </>
  );
};

export default HeroForm;
