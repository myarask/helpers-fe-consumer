import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

type TopNavProps = {
  children: React.ReactNode;
};

const useStyles = makeStyles(() => ({
  toolbar: {
    paddingLeft: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const TopNav = ({ children }: TopNavProps) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export { TopNav };
