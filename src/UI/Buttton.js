import './Button.scss';

const Buttton = (props) => {
  return (
    <button className="button" type={props.type || 'button'}>
      {props.children}
    </button>
  );
};

export default Buttton;
