import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import Button from './Button';
import './Modal.scss';

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}>
          <div
            className={props.className || 'modal'}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
          >
            <h2 id="dialog-title" className="modal__title">
              {props.title}
            </h2>
            <p id="dialog-description" className="modal__subtitle">
              {props.subtitle}
            </p>
            <Button
              className="button button--modal"
              type="button"
              onClick={props.onClick}
            >
              Close
            </Button>
          </div>
        </Backdrop>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
