import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/joy/Alert';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import IconButton from '@mui/joy/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { Link as LinkRoute, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userSignUp } from '../redux/auth/action';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isSignUpSuccessful, setIsSignUpSuccessful] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || password === "") {
      alert("Please Enter All fields")
    }
    else {
      const userData = {
        name: `${firstName} ${lastName}`,
        email,
        password,
      }
      // console.log({ userData })

      dispatch(userSignUp(userData))
        .then(() => {
          setIsSignUpSuccessful(true)
          setOpen(true)
          setTimeout(() => {
            navigate("/signin")
          }, 2500);
        })
    }
  };

  const handleCloseAlert = () => {
    setIsSignUpSuccessful(false);
    setOpen(false)
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleCloseAlert}
      >
        {isSignUpSuccessful && (
          <Box width={"30%"} m={'auto'} mt={10}>
            <Alert
              variant="soft"
              color="success"
              startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
              endDecorator={
                <IconButton
                  variant="plain"
                  size="sm" color="neutral"
                  onClick={handleCloseAlert}
                >
                  <CloseRoundedIcon />
                </IconButton>
              }
            >
              Sign-Up successful!!.
            </Alert>
          </Box>)}
      </Backdrop>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <LinkRoute to='/signin' className='txt-dec-none'>
                    Already have an account? Sign in
                  </LinkRoute>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>

  );
}



// try {
//   const response = await fetch("http://localhost:5000/users/signup", {
//     method: "POST", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });

//   const result = await response.json();
//   console.log("Success:", result);
// } catch (error) {
//   console.error("Error:", error);
// }