import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Registration = () => {
  return (
      <>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <Grid container spacing={2}>
        <Grid h2 xs={8}>
          <h2>xs=8</h2>
        </Grid>
        <Grid h2 xs={4}>
          <h2>xs=4</h2>
        </Grid>
        <Grid h2 xs={4}>
          <h2>xs=4</h2>
        </Grid>
        <Grid h2 xs={8}>
          <h2>xs=8</h2>
        </Grid>
      </Grid></>
  )
}

export default Registration