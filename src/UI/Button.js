import './Button.scss';

const Button = (props) => {
  return (
    <button
      className={props.className || 'button'}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
