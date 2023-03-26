import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import Button from './Button';
import './Modal.scss';

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}>
          <div className={props.className || 'modal'}>
            <h2 className="modal__title">{props.title}</h2>
            <p className="modal__subtitle">{props.subtitle}</p>
            <Button className="button button--modal" onClick={props.onClick}>
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
