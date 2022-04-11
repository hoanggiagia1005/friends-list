import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import ethereum_address from "ethereum-address";
import {v4 as uuidv4} from "uuid";


const UpdateModal = ({friend, open, handleClose, handleUpdate}) => {
  const [name, setName] = useState()
  const [walletAddress, setWalletAddress] = useState()
  const [email, setEmail] = useState()
  const [nameErrorText, setNameErrorText] = useState()
  const [walletAddressErrorText, setWalletAddressErrorText] = useState()
  const [emailErrorText, setEmailErrorText] = useState()
  const verifyName = () => {
    if (!name) {
      setNameErrorText("Please enter name.");
      return false;
    } else {
      setNameErrorText("");
      return true;
    }
  }
  const verifyWalletAddress = () => {
    if (!walletAddress) {
      setWalletAddressErrorText("Please enter wallet address");
      return false;
    } else if(!ethereum_address.isAddress(walletAddress)) {
      setWalletAddressErrorText("Please enter correct wallet address format");
      return false;
    } else {
      setWalletAddressErrorText("")
      return true;
    }
  }
  const verifyEmail = () => {
    if (!email) {
      setEmailErrorText("Please enter email");
      return false;
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErrorText("Please enter correct email format");
      return false;
    } else {
      setEmailErrorText("")
      return true;
    }
  }

  useEffect(() => {
    setName(friend?.name)
    setWalletAddress(friend?.walletAddress)
    setEmail(friend?.email)
  },[friend])

  const updateFriend = () => {
    const isValidName = verifyName()
    const isValidWalletAddress = verifyWalletAddress()
    const isValidEmail = verifyEmail()

    if(isValidName && isValidWalletAddress && isValidEmail) {
      handleUpdate({
        ...friend,
        name,
        walletAddress,
        email
      })
    }
  }
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
          value={name}
          error={!!nameErrorText}
          helperText={nameErrorText}
          onInput={ e => setName(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="wallet-address"
          label="Wallet Address"
          type="text"
          fullWidth
          variant="standard"
          value={walletAddress}
          error={!!walletAddressErrorText}
          helperText={walletAddressErrorText}
          onInput={ e => setWalletAddress(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          error={!!emailErrorText}
          helperText={emailErrorText}
          onInput={ e => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={updateFriend}>Update</Button>
      </DialogActions>
    </Dialog>
  )
}
export default UpdateModal;
