import './Login.css'
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Heading from '../../components/Heading';
import loginImg from '../../../public/loginImg.png'
import google from '../../../public/google.png'

const Login = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid h2 xs={6}>
          <div className="login-container">
            <Heading title="Login to your account!" />

            <img className='google' src={google}/>

            <div className="reg-input">
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                type="email"
              />
            </div>
            <div className="reg-input">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
            </div>

            <button className="signUp-btn">Login to Continue</button>
          </div>
        </Grid>
        <Grid h2 xs={6}>
          <img className="loginImg" src={loginImg} />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
