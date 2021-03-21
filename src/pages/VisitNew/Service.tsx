import React from 'react';
import { Box, Typography, Icon, ListItem, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { ServiceIcon } from '../../components';

const useStyles = makeStyles((theme) => ({
  listItem: {
    border: '1px solid #DFDFDF',
    borderRadius: '10px',
    margin: theme.spacing(2, 0),
    padding: 0,
    paddingRight: theme.spacing(2),
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    borderRadius: `10px 0 0 10px`,
  },
}));

type ServiceProps = {
  id: string;
  name: string;
  description: string;
  included: string;
  fee: number;
  onClick: () => void;
};

const Service = ({ onClick, description, name, included, fee }: ServiceProps) => {
  const classes = useStyles();

  return (
    <ListItem button onClick={onClick} className={classes.listItem}>
      <Box className={classes.cardContainer}>
        <Box display="flex" flexDirection="row" mr={1}>
          <ListItemIcon className={classes.iconContainer}>{/* <ServiceIcon id={id} color="white" /> */}</ListItemIcon>
          <Box display="flex" flexDirection="column" justifyContent="center" pt={1} pb={1}>
            <Typography variant="h1" gutterBottom>
              <b>{name}</b>
            </Typography>

            <Typography variant="body2" gutterBottom>
              {description}
            </Typography>

            <Typography variant="h1" color="primary">
              <>$</>
              <>{(fee / 100).toFixed(2)}</>
            </Typography>
          </Box>
        </Box>

        <Icon color="primary" fontSize="large">
          {included ? 'check_circle' : 'radio_button_unchecked'}
        </Icon>
      </Box>
    </ListItem>
  );
};

export default Service;
