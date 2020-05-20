import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface AlertProps {
  open: boolean;
  setOpen: Function;
  title: string;
  text: string;
  textAcceptButton: string;
  ifAccepted?: {
    execute: Function;
  };
}

const Alert = ({
  open,
  setOpen,
  title,
  text,
  textAcceptButton,
  ifAccepted,
}: AlertProps): JSX.Element => {
  function handleAccept(): void {
    setOpen(false);

    if (ifAccepted) {
      const { execute } = ifAccepted;
      execute();
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAccept} color="secondary" variant="contained">
            {textAcceptButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Alert;
