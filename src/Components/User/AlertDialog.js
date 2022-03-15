import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from "@mui/material/IconButton";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("Abrdio")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("cargo")
  return (
    <div>
      <IconButton aria-label="settings" onClick={handleClickOpen}>
        <HelpOutlineIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
