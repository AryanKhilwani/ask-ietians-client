import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link as Navlink, useNavigate} from 'react-router-dom'
import '../Firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const auth = getAuth();
const provider = new GoogleAuthProvider();
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const url='https://localhost/'
export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const SignInWithFirebase = ()=>{
    
    
    signInWithPopup(auth, provider)
  .then(async (result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    auth.currentUser.getIdToken(/* forceRefresh */ true).then(async(idToken)=> {
      // Send token to your backend via HTTPS
      // ...
      // console.log(idToken)
      // const token = jwt.sign(
      //   { _id: user.uid},
      //   'shirogane'
      // );
      
      navigate(-1)
      // try {
        
      //   const response = await fetch(url, {
      //     method: 'POST',
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'x-auth-token': idToken
      //     },// body data type must match "Content-Type" header
      //   });
      // } catch (error) {
      //   console.log(error)
      // }
      localStorage.setItem('x-auth-token',idToken)
    }).catch(function(error) {
      // Handle error
    });
    
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  }
  const navigate = useNavigate()
  return (
    <>
      <Container component="main" maxWidth="xs" sx={{mt:10}}>
        <CssBaseline />
        <Box >
          <Container
            sx={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))`,
              backdropFilter: `blur(7px)`,
              boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
              borderLeft: `solid 1px rgba(255,255,255,0.3)`,
              borderTop: `solid 1px rgba(255,255,255,0.3)`,
              borderRadius: 2,
              p:1,
              
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
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
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={SignInWithFirebase}
              >
                Sign In with G
              </Button>
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
                  <Link component={Navlink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}