import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HomeIcon from '@material-ui/icons/Home';
import "./DialogForm.styles.css"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="add-property-dialog">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <HomeIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Property</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField autoFocus margin="dense" id="name" label=" Address" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog><br></br>
      Add Property
    </div>
  );
}
