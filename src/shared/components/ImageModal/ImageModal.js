import React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';

const ImageModal = props => {
  const {
    onHide,
    label = 'label',
    src = 'https://placeimg.com/1600/1400/any',
    caption = 'caption'
  } = props;
  return (
    <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{label}</h4>
        <Image src={src} alt={label} responsive />
        <p>{caption}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
