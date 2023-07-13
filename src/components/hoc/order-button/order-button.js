import React from "react";
import ReactDOM from 'react-dom';
import ModalWindow from "../../ui/modal-window/modal-window";

function OrderButton(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onClickButton = this.onClickButton.bind(this);
    }

    componentDidMount() {
      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          if (rootElement.children[0] === overlay) {
            rootElement.removeChild(overlay);
          }
          return;
        }
      };
      window.addEventListener('keydown', handleEsc);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', handleEsc);
    }

    onClickButton() {
      const rootElement = document.querySelector('#root');
      const overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      overlay.style.zIndex ='100';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      rootElement.insertAdjacentElement('afterbegin', overlay);
      ReactDOM.render(<ModalWindow parent={overlay} root={rootElement} />, overlay);
    }

    render() {
      return <WrappedComponent onClick={this.onClickButton} />;
    }
  };
}

export default OrderButton;
