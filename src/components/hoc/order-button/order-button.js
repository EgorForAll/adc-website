import React from "react";


function OrderButton(WrappedComponent, isOpened, setOpen, click, service) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onClickButton = this.onClickButton.bind(this);
      this.handleEsc = this.handleEsc.bind(this);
      this.state = {
        isModalOpen: isOpened
      }
    }

    handleEsc(evt) {
      if (evt.key === 'Escape') {
        document.querySelector('.overlay').classList.add('opacity-overlay');
        document.querySelector('.modal-window').classList.add('modal-up');
        setTimeout(() => setOpen(false), 1000);
      }
    }

    componentDidMount() {
      window.addEventListener('keydown', this.handleEsc);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleEsc);
    }

    onClickButton() {
       if (click) {
        click(service);
       } ;
      setOpen(true)
    }

    render() {
      return <WrappedComponent onClick={this.onClickButton} />;
    }
  };
}


export default OrderButton;
