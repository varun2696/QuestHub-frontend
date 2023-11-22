import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
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

import { Link as LinkRoute, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userSignIn } from '../redux/auth/action';

const defaultTheme = createTheme();

export default function SignIn() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [isLoginSuccessful, setIsLoginSuccessful] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            alert("Please Enter All fields")
        }
        else {
            const userData = {
                email,
                password
            }
            // console.log({ userData })

            dispatch(userSignIn(userData)).then(() => {
                // alert("Login Successful!!")
                setIsLoginSuccessful(true);
                setOpen(true)
                setTimeout(() => {
                    navigate(location.state, { replace: true })
                }, 2500);
            })
        }
    };

    const handleCloseAlert = () => {
        setIsLoginSuccessful(false);
        setOpen(false)
    };

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleCloseAlert}
            >
                {isLoginSuccessful && (
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
                            Login successful!!.
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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <LinkRoute to={'/signup'} className='txt-dec-none'>
                                        {"Don't have an account? Sign Up"}
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