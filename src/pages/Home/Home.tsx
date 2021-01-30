import * as React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button, Divider, Typography, List, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Service from './HomeService';
import { paths } from '../../constants';
import { GET_ACTIVE_VISITS, GET_MY_USER } from '../../queries';

const Home = () => {
  const activeVisits = useQuery(GET_ACTIVE_VISITS, { pollInterval: 10000 });
  const myUser = useQuery(GET_MY_USER);

  if (myUser.loading || activeVisits.loading) return <LinearProgress />;

  const hasApprovedClients = myUser.data.myUser?.clients.some((client) => client.approvedAt);
  // const { activeVisits, loading } = useActiveVisits();
  // const { hasApprovedClients } = useIdentity();

  return (
    <Box display="flex" flexDirection="column" height="calc(100% - 50px)">
      <Box flexGrow="1">
        {hasApprovedClients && (
          <>
            <Box m={3} mx={2}>
              <Typography variant="h1">
                <b>Active Visits</b>
              </Typography>
            </Box>
            <Divider />
          </>
        )}

        {!hasApprovedClients && (
          <Box p={3}>
            <Typography variant="h2" gutterBottom>
              <b>Welcome to Helpers!</b>
            </Typography>
            <Typography gutterBottom>
              We need some information to register you or your loved one for home care on demand.
            </Typography>
            <Typography gutterBottom>
              Book a 30 minute home visit at the service location to complete registration.
            </Typography>

            <Box pt={3}>
              <Button
                component="a"
                href="https://meetings.hubspot.com/info4832/onboarding-meeting"
                target="_blank"
                variant="contained"
                color="primary"
                fullWidth
              >
                Book a Home Visit
              </Button>
            </Box>
          </Box>
        )}
        <List>
          {activeVisits.data.activeVisits?.map((visit: any) => (
            <Service key={visit.id} {...visit} />
          ))}
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Button component={Link} to={paths.visitNew} variant="contained" color="primary" fullWidth>
          Request Helper
        </Button>
      </Box>
    </Box>
  );
};

export { Home };
