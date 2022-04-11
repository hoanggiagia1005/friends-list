import {Button, Card, CardActions, CardContent, Grid, Paper, Typography} from "@mui/material";

const FriendList = ({friends, setSelectedFriend, showUpdateModal, removeFriend}) => {
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h1" variant="h4" align="center">
        Friends
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
                  <Button variant="contained" size="small" onClick={ () => {
                    setSelectedFriend(friend)
                    showUpdateModal(true)
                  }}>Update</Button>
                  <Button variant="contained" size="small" onClick={() => removeFriend(friend.id)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default FriendList;
