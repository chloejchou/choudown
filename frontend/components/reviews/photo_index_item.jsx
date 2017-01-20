import React from 'react';
import Modal from 'react-modal';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.modalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      },
      content: {
        position: 'absolute',
        top: '10%',
        left: '25%',
        right: '25%',
        bottom: '10%',
        background: 'transparent',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '5px',
        outline: 'none',
        padding: '20px',
        border: 'none'
      }
    };
  }

  componentWillMount() {
    Modal.setAppElement(document.body);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return (
      <div>
        <Modal
          contentLabel="modal"
          style={this.modalStyle}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <img src={this.props.photo.url}></img>
        </Modal>
        <img
          className="review-item-img"
          src={this.props.photo.url}
          onClick={this.openModal}
        />
      </div>
    );
  }
}

export default PhotoIndexItem;
