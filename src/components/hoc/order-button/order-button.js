import React from "react";
import ReactDOM from 'react-dom';
import ModalWindow from "../../ui/modal-window/modal-window";

const createOverlay = () => {
  const overlay =  document.createElement('div');
  overlay.classList.add('overlay');
  return overlay;
}


function OrderButton(WrappedComponent, service) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.overlay = createOverlay();
      this.rootElement = document.querySelector('#root');
      this.onClickButton = this.onClickButton.bind(this);
      this.handleEsc = this.handleEsc.bind(this);
      this.state = {
        service: service
      }
    }

    handleEsc(evt) {
      if (evt.key === 'Escape') {
        if (this.rootElement.firstChild === this.overlay) {
          this.rootElement.removeChild(this.overlay);
        }
        return;
      }
    }

    componentDidMount() {
      window.addEventListener('keydown', this.handleEsc);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleEsc);
    }

    onClickButton() {
      this.rootElement.insertAdjacentElement('afterbegin', this.overlay);
      ReactDOM.render(
        <ModalWindow parent={this.overlay} root={this.rootElement} service={this.state.service} />, this.overlay
      )
    }

    render() {
      return <WrappedComponent onClick={this.onClickButton} selectedService={this.state.service} />;
    }
  };
}

export default OrderButton;
