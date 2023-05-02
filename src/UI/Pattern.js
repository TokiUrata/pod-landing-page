import './Pattern.scss';

const Pattern = (props) => {
  return (
    <div
      className={props.className || 'pattern'}
      aria-hidden="true"
      data-testid="pattern"
    />
  );
};

export default Pattern;
