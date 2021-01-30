import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Heart from '../../assets/heart-solid-teal.svg';
import { BackTopNav } from '../../components';
import { paths } from '../../constants';

const VisitMatch = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <BackTopNav />
      <Box p={4} flexGrow={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <div>
          <Typography variant="h2" align="center" gutterBottom>
            We are searching for nearby Helpers
          </Typography>
          <Box display="flex" justifyContent="center" p={2}>
            <img src={Heart} alt="heart" style={{ marginRight: '10px' }} />
            <img src={Heart} alt="heart" style={{ marginRight: '10px' }} />
            <img src={Heart} alt="heart" />
          </Box>
          <Typography variant="h2" align="center">
            You will be notified when there is a match
          </Typography>
          <Box pt={3}>
            <Button fullWidth component={Link} to={paths.home} variant="contained" color="primary">
              Go to the Home Screen
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default VisitMatch;
