// import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import GroupList from '../GroupList/GroupList';
import FriendRequest from '../FriendRequest/FriendRequest';
import Friends from '../Friends/Friends';
import MyGroup from '../MyGroup/MyGroup';
import UserList from '../UserList/UserList';
import BlockedUsers from '../BlockedUsers/BlockedUsers';

const Home = () => {
    const navigate = useNavigate()

    const handleLogout = ()=>{
        navigate('/login')
    }


  return (
    <>
       <Grid container spacing={3}>
        
        <Grid item xs={4}>
          <GroupList/>
          <FriendRequest/>
        </Grid>
        <Grid item xs={4}>
          <Friends/>
         <MyGroup/>
        </Grid>
        <Grid item xs={4}>
          <UserList/>
          <BlockedUsers/>
        </Grid>
      </Grid>
    </>
    // <Button variant="contained" onClick={handleLogout}>Log Out</Button>
  )
}

export default Home