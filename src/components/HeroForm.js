import Button from '../UI/Button';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import './HeroForm.scss';

const HeroForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const addEmailHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().length === 0) {
      setErrorMessage('Oops! Please add your email');
      return;
    } else if (!isEmail(enteredEmail.trim())) {
      setErrorMessage('Oops! Please check your email');
      return;
    }

    console.log(enteredEmail);
    setEnteredEmail('');
    setErrorMessage('');
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    if (enteredEmail.trim().length === 0) {
      setErrorMessage('');
    }
  };

  const blurHandler = (event) => {
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
          onBlur={blurHandler}
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
