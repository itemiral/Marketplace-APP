import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import {
  useHistory, NavLink,
} from 'react-router-dom';

import {
  makeStyles,
} from '@material-ui/core/styles';

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
function CreateUser() {
  const [user, setUser] = React.useState({name: '', email: '', password: ''});
  const history = useHistory();

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('/createUser', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // console.log("how about here?");
        return res.json();
      })
      .then((json) => {
        // console.log(json);
        localStorage.setItem('user', JSON.stringify(json));
        history.push('/');
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        id="namecr"
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
        required
      />
      <input
        id="emailcr"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
        required
      />
      <input
        id="passwordcr"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        required
      />
      <input type="submit"
        aria-label='createz account'
        value="Create" />
    </form>
  );
}

/**
 * Simple appbar with login button
 * based on: https://codesandbox.io/s/qm6e1?file=/demo.js
 *
 * @return {object} JSX
 */
export default function CreateUserScreen() {
  const classes = useStyles();
  return (
    <Box sx={{flexGrow: 1}}>
      <b>Create Account Here</b>
      <CreateUser />
      <Button variant='contained'>
        <NavLink
          exact to="/login"
          className={classes.linkText}>Back  </NavLink>
      </Button>
    </Box>
  );
}
