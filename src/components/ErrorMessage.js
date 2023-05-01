import './ErrorMessage.scss';

const ErrorMessage = (props) => {
  return (
    <span
      className={props.className || 'error-message error-message--active'}
      role="alert"
      aria-live="assertive"
      aria-describedby="error-description"
      aria-label={`Error: ${props.message}`}
    >
      {props.message}
    </span>
  );
};

export default ErrorMessage;
