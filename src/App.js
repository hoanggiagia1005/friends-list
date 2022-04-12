import './App.css';
import {Alert, Container, Snackbar} from "@mui/material";
import {useState} from "react";
import UpdateModal from "./components/UpdateModal";
import FriendList from "./components/FriendList";
import Header from "./components/Header";
import FriendForm from "./components/FriendForm";

function App() {
  const [selectedFriend, setSelectedFriend] = useState()
  const [friends, setFriends] = useState([])
  const [showModalUpdateFriend, setShowModalUpdateFriend] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
    setAlertMessage("Successfully added a new friend contact!")
    setShowAlert(true)
  }
  const updateFriend = (friend) => {
    let index = friends.findIndex(item => item.id === friend.id)
    let newFriends = [...friends];
    newFriends[index] = friend;
    setFriends(newFriends);
    setShowModalUpdateFriend(false);
    setAlertMessage("Successfully updated a friend contact!")
    setShowAlert(true)
  }
  const removeFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  }

  const closeModal = () => {
    setShowModalUpdateFriend(false);
  }
  const handleCloseAlert = () => {
    setShowAlert(false);
  }

  return (
    <>
      <Header />
      <Container component="main" sx={{ mb: 4 }}>
        <FriendForm addFriend={addFriend} />
        <FriendList friends={friends} setSelectedFriend={setSelectedFriend} removeFriend={removeFriend} showUpdateModal={setShowModalUpdateFriend}/>
      </Container>
      <UpdateModal friend={selectedFriend} open={showModalUpdateFriend} handleClose={closeModal} handleUpdate={updateFriend} />
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
