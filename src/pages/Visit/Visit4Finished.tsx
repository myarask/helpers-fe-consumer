import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { BackTopNav } from '../../components';
import { GET_VISIT } from '../../queries';

const VisitFinished = () => {
  const { id } = useParams<{ id: string }>();
  const visit = useQuery(GET_VISIT, {
    variables: { id: Number(id) },
  });

  if (visit.loading) return <LinearProgress />;

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <BackTopNav />
      <Box p={2}>
        <Typography>{`${visit.data.agencyUser.user.fullName} has completed the visit`}</Typography>
      </Box>

      <Box p={2}>
        <Button component={Link} to={paths.home} fullWidth>
          Return Home
        </Button>
      </Box>
    </Box>
  );
};

export default VisitFinished;
