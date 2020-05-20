import React from 'react';

import ModalUi from '@material-ui/core/Modal';

import { Container } from './styles';

interface ModalProps {
  open: boolean;
  setOpen: Function;
  Component: JSX.Element;
}

const Modal = ({ open, setOpen, Component }: ModalProps): JSX.Element => {
  return (
    <ModalUi
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>{Component}</Container>
    </ModalUi>
  );
};

export default Modal;
