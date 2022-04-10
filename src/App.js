import './App.css';
import {
  AppBar, Button, Card, CardActions, CardContent, Container, Grid,
  Paper, TextField,
  Toolbar,
  Typography
} from "@mui/material";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [friends, setFriends] = useState([])
  const [showModalUpdateFriend, setShowModalUpdateFriend] = useState(false);

  const addFriend = (friend) => {
    const uuid = uuidv4();
    friend.id = uuid;
    setFriends([...friends, friend]);
  }
  const updateFriend = (friend) => {
    let index = friends.findIndex(item => item.id === friend.id)
    if(index) {
      let newFriends = [...friends];
      newFriends[index] = friend;
      setFriends(newFriends);
    } else {
      //TODO
    }
  }
  const removeFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  }

  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Friends List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Form
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="name"
                label="Name"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="wallet-address"
                label="Wallet Address"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="email"
                label="Email"
                fullWidth
                variant="standard"
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
        </Paper>

        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Friends
          </Typography>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            {friends.map((friend) => {
              return (
                <Grid item xs={12} md={6} key={friend.id}>
                  <Card className="friend-card">
                    <CardContent>
                      <Typography color="text">
                        Name: {friend.name}
                      </Typography>
                      <Typography color="text">
                        Wallet Address: {friend.walletAddress}
                      </Typography>
                      <Typography color="text">
                        Email: {friend.email}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={setShowModalUpdateFriend(true)}>Update</Button>
                      <Button size="small" onClick={() => removeFriend(friend.id)}>Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default App;
