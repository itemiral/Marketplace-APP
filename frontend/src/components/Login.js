import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import {
  Box, Button,
} from '@mui/material';
import {
  makeStyles,
} from '@material-ui/core/styles';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import {
  useHistory, NavLink,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  linkText: {
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
  },
}));

/**
 * Login authentication from authenticated books example
 *
 * @return {object} JSX
 */
function Login() {
  const [user, setUser] = React.useState({email: '', password: ''});
  const history = useHistory();

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    fetch('/authenticate', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        /*  if (!res.ok) {
          throw res;
        }*/
        return res.json();
      })
      .then((json) => {
        // console.log(json);
        localStorage.setItem('user', JSON.stringify(json));
        history.push('/');
      });
    /*  .catch((err) => {
      //  console.log(err);
      //  alert('Error logging in, please try again');
    });*/
  };

  return (
    <form onSubmit={onSubmit} aria-label='login page'>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
        required
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        required
      />
      <input type="submit" aria-label='loginz page' value="Login" />
    </form>
  );
}

/**
 * Simple appbar with login button
 * based on: https://codesandbox.io/s/qm6e1?file=/demo.js
 *
 * @return {object} JSX
 */
export default function LoginScreen() {
  const classes = useStyles();
  return (
    <Box>
      <div aria-label='login page'
      ><b>Sign in here</b></div>
      <Login />
      <Button variant='contained'>
        <NavLink
          aria-label='create account'
          to="/new-user"
          className={classes.linkText}
        >Create Account</NavLink>
      </Button>
      <Button variant='contained'
        sx={{
          right: '-100px',
        }}>
        <NavLink exact to="/home" className={classes.linkText}
        >Back</NavLink>
      </Button>
    </Box>
  );
}

