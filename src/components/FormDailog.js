import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { createGroupEntity } from "actions/groupEntityActions";
import { Alert } from "@mui/material";
export default function FormDialog() {
  const alert=useAlert()
  const {loading,error,success}=useSelector(state=>state.groupEntity)
  console.log(loading,error,success)
  React.useEffect(()=>{
    if(error){
alert.error("Group entity creation falied")
    }
    if(success){
      alert.success("Group entity created successfully")
    }

  },[error,success])
  const dispatch=useDispatch()
  const [open, setOpen] = React.useState(false);
  const [flag,setFlag]=React.useState('Y')
const [groupName, setGroupName] = React.useState("");
const handleGroupNameChange=(event)=>{
  setGroupName(event.target.value);
}
console.log(groupName);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createGroup=()=>{
    dispatch(createGroupEntity(groupName,flag))
    setOpen(false);
  }

  return (
    <div>
      <button
        onClick={handleClickOpen}
        type="submit"
        className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        Create Group Entity
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>GROUP CREATION FORM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To proceed furthur you need to create a group.
          </DialogContentText>
          <TextField
          onChange={handleGroupNameChange}
            autoFocus
          
            id="name"
            label="name of the group"
            type="text"
            fullWidth
           
          />
        </DialogContent>
        <DialogActions>
        <button
        onClick={handleClose}
        type="submit"
        className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        Cancel
      </button>
      <button
        onClick={createGroup}
        type="submit"
        className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        Create Group Entity
      </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
