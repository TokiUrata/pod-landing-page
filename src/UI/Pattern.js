import './Pattern.scss';

const Pattern = (props) => {
  return <div className={props.className || 'pattern'} aria-hidden="true" />;
};

export default Pattern;
