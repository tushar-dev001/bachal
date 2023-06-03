
// import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const handleLogout = ()=>{
        navigate('/login')
    }


  return (
    <>
      <h1>home</h1>
    </>
    // <Button variant="contained" onClick={handleLogout}>Log Out</Button>
  )
}

export default Home