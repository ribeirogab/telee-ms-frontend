import React from 'react';

import ModalUi from '@material-ui/core/Modal';

import { Container } from './styles';

interface ModalProps {
  idForApiRequest?: string | null;
  open: boolean;
  setOpen: Function;
  Component: JSX.Element;
}

const Modal = ({
  idForApiRequest,
  open,
  setOpen,
  Component,
}: ModalProps): JSX.Element => {
  if (idForApiRequest && open) console.log(`Req: ${idForApiRequest}`); // eslint-disable-line
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
