import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BusinessIcon from '@mui/icons-material/Business';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {NavLink} from 'react-router-dom';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CableIcon from '@mui/icons-material/Cable';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PetsIcon from '@mui/icons-material/Pets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PanToolIcon from '@mui/icons-material/PanTool';
import SetMealIcon from '@mui/icons-material/SetMeal';
import CategoryIcon from '@mui/icons-material/Category';

/**
 * List of categories
 * from: https://mui.com/components/lists/
 *
 * @return {object} JSX
 */
export default function CategoryScreen() {
  return (
    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders">
        <NavLink exact to="/home">Back  </NavLink>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary="Cars" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CableIcon />
              </ListItemIcon>
              <ListItemText primary="Electronics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Rentals" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SoupKitchenIcon />
              </ListItemIcon>
              <ListItemText primary="Kitchen" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SportsHandballIcon />
              </ListItemIcon>
              <ListItemText primary="Sports" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HolidayVillageIcon />
              </ListItemIcon>
              <ListItemText primary="Camping" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SetMealIcon />
              </ListItemIcon>
              <ListItemText primary="Fishing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Collecting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary="Pet Suplies" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PanToolIcon />
              </ListItemIcon>
              <ListItemText primary="Handmade" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              <ListItemText primary="Digital Media" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckroomIcon />
              </ListItemIcon>
              <ListItemText primary="Clothes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
