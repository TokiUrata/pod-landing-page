import './Backdrop.scss';

const Backdrop = (props) => {
  return (
    <div
      className={props.className || 'backdrop'}
      onClick={props.onClick}
      role="presentation"
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
