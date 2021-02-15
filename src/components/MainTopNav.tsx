import React, { useState } from 'react';
import {
  Avatar,
  IconButton,
  List,
  SwipeableDrawer,
  Box,
  Typography,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from '@auth0/auth0-react';
import { GET_MY_USER } from '../queries';
import { paths } from '../constants';
import { TopNav } from './TopNav';
import { Logo } from './Logo';
import { NavItem } from './NavItem';

const MainTopNav = () => {
  const { isAuthenticated, logout } = useAuth0();
  const myUser = useQuery(GET_MY_USER);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleLogout = () => logout({ returnTo: window.location.origin });

  if (!isAuthenticated) return null;
  if (myUser.loading) return null;

  return (
    <div>
      <TopNav>
        <IconButton aria-label="Main Menu" onClick={handleOpen}>
          <MenuIcon fontSize="small" color="secondary" />
        </IconButton>

        <Logo />

        <Box width="44px" />
      </TopNav>

      <SwipeableDrawer open={open} onClose={handleClose} onOpen={handleOpen}>
        <Box p={2}>
          <Avatar alt={myUser.data.myUser?.fullName ?? 'Unknown'} />
          <Box pt={3}>
            <Typography variant="h1">
              <b>{myUser.data.myUser?.fullName ?? 'Unknown'}</b>
            </Typography>
          </Box>
        </Box>

        <List component="nav" aria-label="Main Menu">
          <NavItem to={paths.home} label="Home" icon="home" onClick={handleClose} />
          <NavItem to={paths.profile} label="Profile" icon="person" onClick={handleClose} />
          <NavItem to={paths.paymentMethod} label="Payment Method" icon="person" onClick={handleClose} />
          <NavItem to={paths.support} label="Support" icon="settings" onClick={handleClose} />

          <ListItem component="a" href="https://www.gethelpers.ca/privacy-policy.html">
            <ListItemIcon>
              <Icon color="primary">privacy_tip</Icon>
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <NavItem label="Logout" icon="exit_to_app" to="#" onClick={handleLogout} />
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export { MainTopNav };
