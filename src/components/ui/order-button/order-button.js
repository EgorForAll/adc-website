import React, { useCallback, useEffect} from "react";
import ReactDOM from 'react-dom';
import ModalWindow from "../modal-window/modal-window";

const OrderButton = ({title}) => {
  const rootElement = document.querySelector('#root');
  const overlay = document.createElement('div');

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.key === 'Escape') {
          if (rootElement.children[0] === overlay) {
            rootElement.removeChild(overlay);
          }
          return;
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const createOverlay = useCallback(() => {
    overlay.style.position = 'absolute';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex ='100';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    rootElement.insertAdjacentElement('afterbegin', overlay);
  }, []);

  const onClickButton = () => {
    createOverlay();
    ReactDOM.render(<ModalWindow parent={overlay} root={rootElement} />, overlay);
  }

    return (
        <button className="intro__button" onClick={() => onClickButton()}>Записаться на техобслуживание</button>
    );
}

export default OrderButton;
