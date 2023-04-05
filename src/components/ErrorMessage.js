import './ErrorMessage.scss';

const ErrorMessage = (props) => {
  return (
    <span
      id="email-error"
      className={props.className || 'error-message error-message--active'}
      role="alert"
      aria-live="assertive"
    >
      {props.message}
    </span>
  );
};

export default ErrorMessage;
