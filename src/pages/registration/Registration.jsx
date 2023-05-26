import "./Registration.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import regImg from "../../../public/regImg.png";
import Heading from "../../components/Heading";

const Registration = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid h2 xs={6}>
          <div className="reg-container">
            <Heading title="Get started with easily register" />
            <p className="reg-para">Free register and you can enjoy it</p>

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
                label="Full Name"
                variant="outlined"
                type="name"
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

            <button className="signUp-btn">Sing Up</button>
          </div>
        </Grid>
        <Grid h2 xs={6}>
          <img className="regImg" src={regImg} />
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
