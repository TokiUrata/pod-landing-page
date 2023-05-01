import './Button.scss';

const Button = (props) => {
  return (
    <button
      className={props.className || 'button'}
      type={props.type || 'button'}
      onClick={props.onClick}
      name={props.name}
      aria-label={props.children}
    >
      {props.children}
    </button>
  );
};

export default Button;
