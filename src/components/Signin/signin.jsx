import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../fireStore";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import {
  Box,
  Card,
  CardMedia,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import { SetDocSignIn } from "../Firebase/SignIn/signin";
import { styles } from "./SignInStyle";
import { useGetDocLogIn } from "../Firebase/LogIn/LogIn";

const SignIn = () => {
  const navigate = useNavigate();
  const users = useGetDocLogIn("users");
  const [bool, setBool] = useState(false);
  const phone = useRef(null);
  const name = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);
  const otp = useRef(null);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptchaContainer",
      {
        size: "invisible",
        callback: (response) => {
          console.log("bolson");
        },
      },
      auth
    );
  };

  const sendOTP = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp.current.value)
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
    setBool(!bool);
  };

  const Send = () => {
    if (phone.current.value >= 12) {
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, "+976" + phone.current.value, appVerifier)
        .then((confirmationResult) => {
          alert("messeage ilgeelee");
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  console.log(users);

  const InputRequst = () => {
    let bool = false;
    if (users.length === 0) bool = true;
    else {
      for (let j = 0; j < users.length; j++) {
        if (
          users[j].email === email.current.value &&
          users[j].phone === phone.current.value
        ) {
          bool = false;
          break;
        } else if (users[j].email === "" && users[j].phone === "") {
          bool = true;
        } else bool = true;
      }
    }
    console.log(bool);
    if (bool) {
      SetDocSignIn(
        email.current.value,
        phone.current.value,
        name.current.value,
        pass.current.value,
        "users"
      );
      navigate("/");
    } else alert("please try again input");
  };

  return (
    <Paper sx={styles.signUpPage}>
      <Card sx={styles.cardSection}>
        <CardMedia
          component="img"
          src="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
          alt=""
          sx={styles.logo}
        />
        <Box>
          <Box>
            <TextField
              sx={styles.input}
              label="phone number..."
              inputRef={phone}
              error
            />
          </Box>
          <Box>
            <TextField
              error
              sx={styles.input}
              label="otp..."
              type="text"
              inputRef={otp}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={Send} sx={styles.btn}>
              Send
            </Button>
            <Button sx={styles.btn} onClick={sendOTP}>
              Check
            </Button>
          </Box>
          <Link to="/">
            <Button sx={styles.logInBtn}>Log in</Button>
          </Link>
        </Box>

        <Card sx={bool ? styles.signUpActive : styles.signUp}>
          <Box>
            <TextField
              error
              label="email..."
              sx={styles.input}
              type="email"
              inputRef={email}
            />
          </Box>
          <Box>
            <TextField
              error
              label="name..."
              sx={styles.input}
              type="text"
              inputRef={name}
            />
          </Box>
          <Box>
            <TextField
              error
              label="password..."
              sx={styles.input}
              type="password"
              inputRef={pass}
            />
          </Box>
          <Button sx={styles.btn} onClick={InputRequst}>
            Sign up
          </Button>
        </Card>
      </Card>
      <div
        id="recaptchaContainer"
        style={{ position: "absolute", bottom: "1em", right: "1em" }}
      ></div>
    </Paper>
  );
};

export default SignIn;
