import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import ethereum_address from "ethereum-address";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const FriendForm = ({addFriend}) => {
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

  const handleAddFriend = (event) => {
    event.preventDefault();

    const isValidName = verifyName()
    const isValidWalletAddress = verifyWalletAddress()
    const isValidEmail = verifyEmail()

    if(isValidName && isValidWalletAddress && isValidEmail) {
      const uuid = uuidv4();
      const newFriend = {
        id : uuid,
        name: name,
        walletAddress: walletAddress,
        email: email
      }
      setName("")
      setWalletAddress("")
      setEmail("")
      addFriend(newFriend)
    }
  }

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h1" variant="h4" align="center">
        Form
      </Typography>
      <form onSubmit={handleAddFriend} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              required
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
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              required
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
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              error={!!emailErrorText}
              helperText={emailErrorText}
              onInput={ e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Add Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default FriendForm;
