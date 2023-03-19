import './ErrorMessage.scss';

const ErrorMessage = (props) => {
  return (
    <span className={props.className || 'error-message error-message--active'}>
      {props.message}
    </span>
  );
};

export default ErrorMessage;
