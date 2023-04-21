import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Controls from "components/controls/Controls";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "10px",
    minWidth: "300px",
  }
}));

export default function Modal(props) {
  const { loanType, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(openPopup);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={openPopup} minWidth="lg" classes={{ paper: classes.dialogWrapper }}>
    <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                {"title"}
            </Typography>
            <Controls.ActionButton
                color="secondary"
                onClick={()=>{setOpenPopup(false)}}>
                <CloseIcon />
            </Controls.ActionButton>
        </div>
    </DialogTitle>
    <DialogContent dividers>
        {children}
    </DialogContent>
</Dialog>
  );
}