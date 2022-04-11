import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";


const UpdateModal = ({friend, open, handleClose, handleUpdate}) => {
  const [name, setName] = useState()
  const [walletAddress, setWalletAddress] = useState()
  const [email, setEmail] = useState()
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Friend Info</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          margin="dense"
          id="wallet-address"
          label="Wallet Address"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleUpdate(friend)}>Update</Button>
      </DialogActions>
    </Dialog>
  )
}
export default UpdateModal;
