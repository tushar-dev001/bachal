import "./Login.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Heading from "../../components/Heading";
import loginImg from "../../../public/loginImg.png";
import google from "../../../public/google.png";

import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate, Link } from "react-router-dom";

const initialValue = {
  email: "",
  fullName: "",
  password: "",
  // loading: ''
};

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // const navigate = useNavigate()

  const [values, setValues] = useState(initialValue);
  const [loader, setLoader] = useState();

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    const { email, password } = values;
    setLoader(true);

    signInWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user);
      
      setValues({
        ...values,
        email: "",
        password: "",
      });
      setLoader(false);

      // navigate('/login')
    });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result, "google sent");
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid h2 xs={6}>
          <div className="login-container">
            <Heading title="Login to your account!" />

            <img onClick={handleGoogleLogin} className="google" src={google} />

            <div className="reg-input">
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                type="email"
                onChange={handleValues}
                name="email"
                value={values.email}
              />
            </div>
            <div className="reg-input">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handleValues}
                name="password"
                value={values.password}
              />
            </div>

            {loader ? (
              <LoadingButton className="signUp-btn" loading variant="outlined">
                Submit
              </LoadingButton>
            ) : (
              <button className="signUp-btn" onClick={handleSignUp}>
                Login To Continue
              </button>
            )}

            <p style={{ marginTop: "18px" }}>
              Aren't have an account?{" "}
              <strong style={{ color: "blue", cursor: "pointer" }}>
                <Link to="/">Sign Up</Link>
              </strong>
            </p>
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
