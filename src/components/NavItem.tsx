import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

type NavItemProps = {
  to: string;
  label: string;
  icon: string;
  onClick: () => void;
};

const NavItem = ({ to, label, onClick, icon }: NavItemProps) => (
  <ListItem button component={Link} to={to} onClick={onClick}>
    <ListItemIcon>
      <Icon color="primary">{icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

export { NavItem };
