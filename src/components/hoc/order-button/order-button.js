import React from "react";
import ReactDOM from 'react-dom';
import ModalWindow from "../../ui/modal-window/modal-window";

function OrderButton(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.overlay = document.createElement('div');
      this.rootElement = document.querySelector('#root');
      this.onClickButton = this.onClickButton.bind(this);
    }

    componentDidMount() {
      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          if (this.rootElement.children[0] === this.overlay) {
            this.rootElement.removeChild(this.overlay);
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
      this.overlay.style.position = 'absolute';
      this.overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      this.overlay.style.zIndex ='100';
      this.overlay.style.width = '100%';
      this.overlay.style.height = '100%';
      this.rootElement.insertAdjacentElement('afterbegin', this.overlay);
      ReactDOM.render(<ModalWindow parent={this.overlay} root={this.rootElement} />, this.overlay);
    }

    render() {
      return <WrappedComponent onClick={this.onClickButton} />;
    }
  };
}

export default OrderButton;
