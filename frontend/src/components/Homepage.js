import React from 'react';
//  import ReactDOM from 'react-dom';
import {
  NavLink,
} from 'react-router-dom';
import {
  Toolbar, AppBar, Typography,
  Button, Grid, Fab, Box, InputBase, Paper,
} from '@mui/material';
import {
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'flex-start',
    bgcolor: 'background.paper',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
  },
  photos: {
    height: '200px',
    width: '200px',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
  },
  linkTextCat: {
    textDecoration: 'none',
  },
}));

const fetchListings = (setListings) => {
  fetch('/getAllListings', {
    method: 'get',
  })
    .then((response) => {
      /* if (!response.ok) {
        throw response;
      }*/
      return response.json();
    })
    .then((json) => {
      // setError('');
      // console.log(json);
      setListings(json);
    })
    /* .catch((error) => {
      console.log(error);
      setListings([]);
      setError(`${error.status} - ${error.statusText}`);
    }) */;
};

const searchListings = (setListings, search) => {
  fetch('/getAllListings' + search, {
    method: 'get',
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // setError('');
      // console.log(json);
      setListings(json);
    });
};

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function Homepage() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = React.useState(user ? user.name : '');
  const [search, setSearch] = React.useState('');
  const [showList, setShowList] = React.useState('');
  const grabList = () => {
    setShowList('show listings');
    fetchListings(setListings);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    if (event.keyCode === 13) {
      if (showList !== '') {
        searchListings(setListings, search);
      }
    }
  };


  const [listings, setListings] = React.useState([]);
  // const [error, setError] = React.useState('Logged Out');

  const logout = () => {
    localStorage.removeItem('user');
    setName('');
    // setError('Logged Out');
    // console.log(error);
  };
  /*
  React.useEffect(() => {
    // setListings([]);
  }, []);
  */

  return (
    <div>
      <Paper
      >
        <Box className={classes.box}
          sx={{
            'position': 'sticky',
            'z-index': 1,
            'p': 2,
            'm': 2.5,
          }}
        >
          <AppBar
            sx={{
              'z-index': '1',
            }}
          >
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h6">
                    Facebook
                  </Typography>
                </Grid>
                <Grid item>
                  {name ?
                    <div>
                      <label>
                        {name}
                      </label>
                      <button
                        disabled={!name}
                        onClick={logout}
                        aria-label='logout button'>
                        Logout
                      </button>
                    </div> :
                    <Button variant="contained">
                      <NavLink
                        className={classes.linkText}
                        aria-label='login button'
                        to="/Login">
                        Sign In
                      </NavLink>
                    </Button>
                  }
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Paper>
      <Box
        className={classes.box}
        sx={{
          'position': 'static',
          'p': 2,
          'm': -1,
          'z-index': '0',
          'right': '-10px',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs="auto">
            <Fab variant="extended">Sell</Fab>
          </Grid>
          <Grid item xs="auto">
            <Fab variant="extended">
              <NavLink
                className={classes.linkTextCat}
                aria-label='category button'
                to="/Categories">All Categories</NavLink>
            </Fab>
          </Grid>
        </Grid>
      </Box>
      <Grid
      >
        <Grid item
          sx={{
            position: 'static',
            border: 1,
            borderRadius: '8px',
            p: -1,
            m: 1,
            left: '-5px',
            down: '-5px',
          }}>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase
              id="searchb"
              placeholder=" Search"
              onChange={handleSearch}
              onKeyDown={getSearch}
            />
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid item
          sx={{
            position: 'static',
            p: 1,
            m: 1,
            left: '-5px',
            down: '-5px',
          }}>
          <div>
            {showList ?
              <table>
                <thead>
                  {listings.map((listItem) => (
                    <tr key={listItem.imageinfo.imageUrl}>
                      <td>
                        <img className={classes.photos}
                          src={listItem.imageinfo.imageUrl}
                          alt={listItem.imageinfo.description}
                        />
                      </td>
                      <td
                        className={classes.text}
                        id='text check'>
                        {listItem.imageinfo.description}
                      </td>
                    </tr>
                  ))}
                </thead>
              </table> :
              <button
                disabled={showList}
                onClick={grabList}
                aria-label='grab listings'>
                Show Listings
              </button>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
