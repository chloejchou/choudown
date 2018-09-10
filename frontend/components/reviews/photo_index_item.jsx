import React from 'react';
import Modal from 'react-modal';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.modalStyle = {
      content: {
        top: '100px',
        left: '200px',
        right: '200px',
        bottom: '100px',
        background: 'transparent',
        outline: 'none',
        border: 'none',
      },
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
      <div className="review-item-img-container">
        <Modal
          contentLabel="modal"
          style={this.modalStyle}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
        >
          <img src={this.props.photo.url} />
        </Modal>
        <img className="review-item-img" src={this.props.photo.url} onClick={this.openModal} />
      </div>
    );
  }
}

export default PhotoIndexItem;
