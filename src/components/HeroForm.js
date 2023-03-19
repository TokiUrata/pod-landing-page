import Button from '../UI/Button';
import { useState } from 'react';
import ErrorMessage from '../UI/ErrorMessage';
import './HeroForm.scss';

const HeroForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const addEmailHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().length === 0) {
      console.log('Oops! Please add your email');
      setErrorMessage('Oops! Please add your email');
      return;
    } else if (!isEmail(enteredEmail.trim())) {
      console.log('Oops! Please check your email');
      setErrorMessage('Oops! Please check your email');
      return;
    }

    console.log(enteredEmail);
    setErrorMessage(false);
    setEnteredEmail('');
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    if (enteredEmail.trim().length === 0) {
      setErrorMessage('');
    }
  };

  return (
    <>
      <form className="hero-form" onSubmit={addEmailHandler}>
        <input
          className="hero-form__input"
          type="text"
          placeholder="Email address"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        <Button className="button button--form" type="submit">
          Request Access
        </Button>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </>
  );
};

export default HeroForm;
