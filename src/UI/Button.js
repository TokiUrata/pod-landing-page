import './Button.scss';

const Button = (props) => {
  return (
    <button className="button" type={props.type || 'button'}>
      {props.children}
    </button>
  );
};

export default Button;
