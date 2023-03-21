import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import './HeroForm.scss';

const HeroForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

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

    setIsValidEmail(true);
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

  const closeModalHandler = () => {
    setIsValidEmail(false);
  };

  return (
    <>
      {isValidEmail && (
        <Modal
          title="Success!"
          subtitle="Access granted. Check your email for more details."
          onClick={closeModalHandler}
        />
      )}
      <form className="hero-form" onSubmit={addEmailHandler}>
        <input
          className="hero-form__input"
          type="text"
          placeholder="Email address"
          onChange={emailChangeHandler}
          onBlur={blurHandler}
          value={enteredEmail}
        />
        <Button
          className="button button--form"
          type="submit"
          onClick={closeModalHandler}
        >
          Request Access
        </Button>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </>
  );
};

export default HeroForm;
