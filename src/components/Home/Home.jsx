import React from 'react'
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const handleLogout = ()=>{
        navigate('/login')
    }


  return (
    <Button variant="contained" onClick={handleLogout}>Log Out</Button>
  )
}

export default Home